// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface SecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#egress SecurityGroup#egress}
  */
  readonly egress?: SecurityGroupEgress[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ingress SecurityGroup#ingress}
  */
  readonly ingress?: SecurityGroupIngress[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name SecurityGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name_prefix SecurityGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}
  */
  readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags SecurityGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags_all SecurityGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#vpc_id SecurityGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#timeouts SecurityGroup#timeouts}
  */
  readonly timeouts?: SecurityGroupTimeouts;
}
export interface SecurityGroupEgress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}
  */
  readonly prefixListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}
  */
  readonly selfAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}
  */
  readonly toPort?: number;
}

export function securityGroupEgressToTerraform(struct?: SecurityGroupEgress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
    prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface SecurityGroupIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}
  */
  readonly prefixListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}
  */
  readonly selfAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}
  */
  readonly toPort?: number;
}

export function securityGroupIngressToTerraform(struct?: SecurityGroupIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
    prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface SecurityGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#create SecurityGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#delete SecurityGroup#delete}
  */
  readonly delete?: string;
}

export function securityGroupTimeoutsToTerraform(struct?: SecurityGroupTimeoutsOutputReference | SecurityGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class SecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group}
*/
export class SecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_security_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_security_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._egress = config.egress;
    this._ingress = config.ingress;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._revokeRulesOnDelete = config.revokeRulesOnDelete;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // egress - computed: true, optional: true, required: false
  private _egress?: SecurityGroupEgress[] | undefined; 
  public get egress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: SecurityGroupEgress[] | undefined) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress?: SecurityGroupIngress[] | undefined; 
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: SecurityGroupIngress[] | undefined) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string | undefined; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // revoke_rules_on_delete - computed: false, optional: true, required: false
  private _revokeRulesOnDelete?: boolean | cdktf.IResolvable | undefined; 
  public get revokeRulesOnDelete() {
    return this.getBooleanAttribute('revoke_rules_on_delete') as any;
  }
  public set revokeRulesOnDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._revokeRulesOnDelete = value;
  }
  public resetRevokeRulesOnDelete() {
    this._revokeRulesOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeRulesOnDeleteInput() {
    return this._revokeRulesOnDelete
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string | undefined; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityGroupTimeouts | undefined; 
  private __timeoutsOutput = new SecurityGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SecurityGroupTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      egress: cdktf.listMapper(securityGroupEgressToTerraform)(this._egress),
      ingress: cdktf.listMapper(securityGroupIngressToTerraform)(this._ingress),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: securityGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
