// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
  */
  readonly applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#association_name SsmAssociation#association_name}
  */
  readonly associationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
  */
  readonly automationTargetParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#compliance_severity SsmAssociation#compliance_severity}
  */
  readonly complianceSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#document_version SsmAssociation#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#instance_id SsmAssociation#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_concurrency SsmAssociation#max_concurrency}
  */
  readonly maxConcurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_errors SsmAssociation#max_errors}
  */
  readonly maxErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#name SsmAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#parameters SsmAssociation#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#schedule_expression SsmAssociation#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * output_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#output_location SsmAssociation#output_location}
  */
  readonly outputLocation?: SsmAssociationOutputLocation;
  /**
  * targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#targets SsmAssociation#targets}
  */
  readonly targets?: SsmAssociationTargets[];
}
export interface SsmAssociationOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_bucket_name SsmAssociation#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_key_prefix SsmAssociation#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
}

export function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocationOutputReference | SsmAssociationOutputLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export class SsmAssociationOutputLocationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string | undefined; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string | undefined) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix
  }
}
export interface SsmAssociationTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#key SsmAssociation#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#values SsmAssociation#values}
  */
  readonly values: string[];
}

export function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association}
*/
export class SsmAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SsmAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applyOnlyAtCronInterval = config.applyOnlyAtCronInterval;
    this._associationName = config.associationName;
    this._automationTargetParameterName = config.automationTargetParameterName;
    this._complianceSeverity = config.complianceSeverity;
    this._documentVersion = config.documentVersion;
    this._instanceId = config.instanceId;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._parameters = config.parameters;
    this._scheduleExpression = config.scheduleExpression;
    this._outputLocation = config.outputLocation;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_only_at_cron_interval - computed: false, optional: true, required: false
  private _applyOnlyAtCronInterval?: boolean | cdktf.IResolvable | undefined; 
  public get applyOnlyAtCronInterval() {
    return this.getBooleanAttribute('apply_only_at_cron_interval') as any;
  }
  public set applyOnlyAtCronInterval(value: boolean | cdktf.IResolvable | undefined) {
    this._applyOnlyAtCronInterval = value;
  }
  public resetApplyOnlyAtCronInterval() {
    this._applyOnlyAtCronInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnlyAtCronIntervalInput() {
    return this._applyOnlyAtCronInterval
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: false, optional: true, required: false
  private _associationName?: string | undefined; 
  public get associationName() {
    return this.getStringAttribute('association_name');
  }
  public set associationName(value: string | undefined) {
    this._associationName = value;
  }
  public resetAssociationName() {
    this._associationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationNameInput() {
    return this._associationName
  }

  // automation_target_parameter_name - computed: false, optional: true, required: false
  private _automationTargetParameterName?: string | undefined; 
  public get automationTargetParameterName() {
    return this.getStringAttribute('automation_target_parameter_name');
  }
  public set automationTargetParameterName(value: string | undefined) {
    this._automationTargetParameterName = value;
  }
  public resetAutomationTargetParameterName() {
    this._automationTargetParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationTargetParameterNameInput() {
    return this._automationTargetParameterName
  }

  // compliance_severity - computed: false, optional: true, required: false
  private _complianceSeverity?: string | undefined; 
  public get complianceSeverity() {
    return this.getStringAttribute('compliance_severity');
  }
  public set complianceSeverity(value: string | undefined) {
    this._complianceSeverity = value;
  }
  public resetComplianceSeverity() {
    this._complianceSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSeverityInput() {
    return this._complianceSeverity
  }

  // document_version - computed: true, optional: true, required: false
  private _documentVersion?: string | undefined; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string | undefined) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string | undefined; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: string | undefined; 
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string | undefined) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency
  }

  // max_errors - computed: false, optional: true, required: false
  private _maxErrors?: string | undefined; 
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string | undefined) {
    this._maxErrors = value;
  }
  public resetMaxErrors() {
    this._maxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string | undefined; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string | undefined) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: SsmAssociationOutputLocation | undefined; 
  private __outputLocationOutput = new SsmAssociationOutputLocationOutputReference(this as any, "output_location", true);
  public get outputLocation() {
    return this.__outputLocationOutput;
  }
  public putOutputLocation(value: SsmAssociationOutputLocation | undefined) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: SsmAssociationTargets[] | undefined; 
  public get targets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmAssociationTargets[] | undefined) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_only_at_cron_interval: cdktf.booleanToTerraform(this._applyOnlyAtCronInterval),
      association_name: cdktf.stringToTerraform(this._associationName),
      automation_target_parameter_name: cdktf.stringToTerraform(this._automationTargetParameterName),
      compliance_severity: cdktf.stringToTerraform(this._complianceSeverity),
      document_version: cdktf.stringToTerraform(this._documentVersion),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      max_errors: cdktf.stringToTerraform(this._maxErrors),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
      output_location: ssmAssociationOutputLocationToTerraform(this._outputLocation),
      targets: cdktf.listMapper(ssmAssociationTargetsToTerraform)(this._targets),
    };
  }
}
