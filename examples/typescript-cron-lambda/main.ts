/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Construct } from "constructs";
import { App, TerraformStack, TerraformVariable } from "cdktf";
import * as fs from "fs";
import {
  Duration,
  aws_lambda,
  aws_events,
  aws_events_targets,
} from "aws-cdk-lib";

import { AwsTerraformAdapter, provider } from "@cdktf/aws-cdk";

export class CronLambdaStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new provider.AwsProvider(this, "aws", { region: "us-west-2" });

    const awsAdapter = new AwsTerraformAdapter(this, "adapter");

    const lambdaFn = new aws_lambda.Function(awsAdapter, "lambda", {
      code: new aws_lambda.InlineCode(
        fs.readFileSync("lambda-handler.py", { encoding: "utf-8" })
      ),
      handler: "index.main",
      timeout: Duration.seconds(300),
      runtime: aws_lambda.Runtime.PYTHON_3_6,
    });

    // Run 6:00 PM UTC every Monday through Friday
    // See https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html
    const rule = new aws_events.Rule(awsAdapter, "rule", {
      schedule: aws_events.Schedule.expression("cron(0 18 ? * MON-FRI *)"),
    });

    rule.addTarget(new aws_events_targets.LambdaFunction(lambdaFn));
  }
}

const app = new App();
new CronLambdaStack(app, "typescript-cron-lambda");

app.synth();
