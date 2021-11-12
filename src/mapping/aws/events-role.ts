import { registerMapping } from "../index";
import { eventbridge } from "../../aws";

// TODO: types for CloudFormation Resources? would be really nice.

registerMapping("AWS::Events::Rule", {
  resource: (scope, id, props) => {
    const ruleProps: eventbridge.CloudwatchEventRuleConfig = {
      name: props.Name,
      isEnabled:
        props.State === "ENABLED"
          ? true
          : props.State === "DISABLED"
          ? false
          : undefined, // TODO: this might be a common case for the automapper to check for / or common pattern to build a utility for
      description: props.Description,
      eventBusName: props.EventBusName,
      eventPattern: props.EventPattern,
      roleArn: props.RoleArn,
      scheduleExpression: props.ScheduleExpression,
    };
    delete props.Name;
    delete props.State;
    delete props.Description;
    delete props.EventBusName;
    delete props.EventPattern;
    delete props.RoleArn;
    delete props.ScheduleExpression; // TODO: use some utility for this simple naming mapping (needs to have the mapping in guessing resource mapper made reusable somehow)

    const rule = new eventbridge.CloudwatchEventRule(
      scope,
      id,
      ruleProps
    );

    (props.Targets || []).map((target: any, idx: number) => {
      const targetProps: eventbridge.CloudwatchEventTargetConfig = {
        arn: target.Arn,
        rule: rule.id,
        batchTarget: target.BatchParameters
          ? {
              jobDefinition: target.BatchParameters.JobDefinition,
              jobName: target.BatchParameters.JobName,
              arraySize: target.BatchParameters.ArrayProperties?.Size,
              jobAttempts: target.BatchParameters.RetryStrategy?.Attempts,
            }
          : undefined,
        deadLetterConfig: target.DeadLetterConfig
          ? {
              arn: target.DeadLetterConfig.Arn,
            }
          : undefined,

        // TODO: this is incomplete, see: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html
      };
      delete props.Targets;

      return new eventbridge.CloudwatchEventTarget(
        scope,
        `${id}_target${idx}`,
        targetProps
      );
    });

    return rule;
  },
  attributes: {
    Arn: (rule: eventbridge.CloudwatchEventRule) => rule.arn,
    Ref: (rule: eventbridge.CloudwatchEventRule) => rule.id,
  },
});
