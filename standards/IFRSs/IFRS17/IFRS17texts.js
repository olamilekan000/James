module.exports = {
	overview:`
IFRS 17 establishes the principles for the recognition, measurement, presentation and disclosure of insurance contracts within the scope of the standard. The objective of IFRS 17 is to ensure that an entity provides relevant information that faithfully represents those contracts. This information gives a basis for users of financial statements to assess the effect that insurance contracts have on the entity's financial position, financial performance and cash flows.

IFRS 17 was issued in May 2017 and applies to annual reporting periods beginning on or after 1 January 2021.
`,
Objective:`
IFRS 17 Insurance Contracts establishes the principles for the recognition, measurement, presentation and disclosure of Insurance contracts within the scope of the Standard. The objective of IFRS 17 is to ensure that an entity provides relevant information that faithfully represents those contracts. This information gives a basis for users of financial statements to assess the effect that insurance contracts have on the entity's financial position, financial performance and cash flows. [IFRS 17:1]
`,
Scope:`
An entity shall apply IFRS 17 Insurance Contracts to: [IFRS 17:3]

Insurance contracts, including reinsurance contracts, it issues; Reinsurance contracts it holds; and Investment contracts with discretionary participation features it issues, provided the entity also issues insurance contracts.
Some contracts meet the definition of an insurance contract but have as their primary purpose the provision of services for a fixed fee. Such issued contracts are in the scope of the standard, unless an entity chooses to apply to them IFRS 15 Revenue from Contracts with Customers and provided the following conditions are met: [IFRS 17:8]

(a) the entity does not reflect an assessment of the risk associated with an individual customer in setting the price of the contract with that customer; (b) the contract compensates the customer by providing a service, rather than by making cash payments to the customer; and (c) the insurance risk transferred by the contract arises primarily from the customer’s use of services rather than from uncertainty over the cost of those services.
`,
keyDef:`
[IFRS 17: Appendix A]

Insurance contract

A contract under which one party (the issuer) accepts significant insurance risk from another party (the policyholder) by agreeing to compensate the policyholder if a specified uncertain future event (the insured event) adversely affects the policyholder.

Portfolio of insurance contracts

Insurance contracts subject to similar risks and managed together.

Contractual service margin

A component of the carrying amount of the asset or liability for a group of insurance contracts representing the unearned profit the entity will recognise as it provides services under the insurance contracts in the group.

Insurance risk

Risk, other than financial risk, transferred from the holders of a contract to the issuer.

Fulfilment cash flows

An explicit, unbiased and probability-weighted estimate (i.e. expected value) of the present value of the future cash outflows less the present value of the future cash inflows that will arise as the entity fulfils insurance contracts, including a risk adjustment for non-financial risk.

Risk adjustment for non-financial risk

The compensation an entity requires for bearing the uncertainty about the amount and timing of the cash flows arising from non-financial risk as the entity fulfils insurance contracts.

`,
SeparatingComponents:`
An insurance contract may contain one or more components that would be within the scope of another standard if they were separate contracts. For example, an insurance contract may include an investment component or a service component (or both). [IFRS 17:10]

The standard provides the criteria to determine when a non-insurance component is distinct from the host insurance contract.

An entity shall: [IFRS 17:11-12]

(a) Apply IFRS 9 Financial Instruments to determine whether there is an embedded derivative to be separated and, if there is, how to account for such a derivative. (b) Separate from a host insurance contract an investment component if, and only if, that investment component is distinct. The entity shall apply IFRS 9 to account for the separated investment component. (c) After performing the above steps, separate any promises to transfer distinct non-insurance goods or services. Such promises are accounted under IFRS 15 Revenue from Contracts with Customers.

`,
Recognition:`
An entity shall recognise a group of insurance contracts it issues from the earliest of the following: [IFRS 17:25]

(a) the beginning of the coverage period of the group of contracts; 
(b) the date when the first payment from a policyholder in the group becomes due; and 
(c) for a group of onerous contracts, when the group becomes onerous
`,
Measurement:`
On initial recognition, an entity shall measure a group of insurance contracts at the total of: [IFRS 17:32]

(a) the fulfilment cash flows (“FCF”), which comprise:
	(i) estimates of future cash flows; 
	(ii) an adjustment to reflect the time value of money (“TVM”) and the financial risks associated with the future cash flows; and 
	(iii) a risk adjustment for non-financial risk
(b) the contractual service margin (“CSM”).
An entity shall include all the future cash flows within the boundary of each contract in the group. The entity may estimate the future cash flows at a higher level of aggregation and then allocate the resulting fulfilment cash flows to individual groups of contracts. [IFRS 17:33]

The estimates of future cash flows shall be current, explicit, unbiased, and reflect all the information available to the entity without undue cost and effort about the amount, timing and uncertainty of those future cash flows. They should reflect the perspective of the entity, provided that the estimates of any relevant market variables are consistent with observable market prices. [IFRS 17:33]

`,
DiscountRates:`
The discount rates applied to the estimate of cash flows shall: [IFRS 17:36]

(a) reflect the time value of money (TVM), the characteristics of the cash flows and the liquidity characteristics of the insurance contracts; 
(b) be consistent with observable current market prices (if any) of those financial instruments whose cash flow characteristics are consistent with those of the insurance contracts; and 
(c) exclude the effect of factors that influence such observable market prices but do not affect the future cash flows of the insurance contracts.
`,
riskAdjFornonFinRisk:`
The estimate of the present value of the future cash flows is adjusted to reflect the compensation that the entity requires for bearing the uncertainty about the amount and timing of future cash flows that arises from non-financial risk. [IFRS 17:37]
`,
ContractualServiceMargin:`
The CSM represents the unearned profit of the group of insurance contracts that the entity will recognise as it provides services in the future. This is measured on initial recognition of a group of insurance contracts at an amount that, unless the group of contracts is onerous, results in no income or expenses arising from: [IFRS 17:38]

(a) the initial recognition of an amount for the FCF; 
(b) the derecognition at that date of any asset or liability recognised for insurance acquisition cash flows; and 
(c) any cash flows arising from the contracts in the group at that date.
`,
SubsequentMeasurement:`
On subsequent measurement, the carrying amount of a group of insurance contracts at the end of each reporting period shall be the sum of: [IFRS 17:40]

(a) the liability for remaining coverage comprising:
	(i) the FCF related to future services and; 
	(ii) the CSM of the group at that date;
(b) the liability for incurred claims, comprising the FCF related to past service allocated to the group at that date.
`,
OnerousContract:`
An insurance contract is onerous at initial recognition if the total of the FCF, any previously recognised acquisition cash flows and any cash flows arising from the contract at that date is a net outflow. An entity shall recognise a loss in profit or loss for the net outflow, resulting in the carrying amount of the liability for the group being equal to the FCF and the CSM of the group being zero. [IFRS 17:47]

On subsequent measurement, if a group of insurance contracts becomes onerous (or more onerous), that excess shall be recognised in profit or loss. Additionally, the CSM cannot increase and no revenue can be recognised, until the onerous amount previously recognised has been reversed in profit or loss as part of a service expense. [IFRS 17:48-49]
`,
PremiumAllocationApproach:`
An entity may simplify the measurement of the liability for remaining coverage of a group of insurance contracts using the Premium Allocation Approach (PAA) on the condition that, at the inception of the group: [IFRS 17:53]

(a) the entity reasonably expects that this will be a reasonable approximation of the general model, or 
(b) the coverage period of each contract in the group is one year or less.
Where, at the inception of the group, an entity expects significant variances in the FCF during the period before a claim is incurred, such contracts are not eligible to apply the PAA. [IFRS 17:54]

Using the PAA, the liability for remaining coverage shall be initially recognised as the premiums, if any, received at initial recognition, minus any insurance acquisition cash flows. Subsequently the carrying amount of the liability is the carrying amount at the start of the reporting period plus the premiums received in the period, minus insurance acquisition cash flows, plus amortisation of acquisition cash flows, minus the amount recognised as insurance revenue for coverage provided in that period, and minus any investment component paid or transferred to the liability for incurred claims. [IFRS 17:55]
`,
ReinsuranceContractHeld:`
The requirements of the standard are modified for reinsurance contracts held.

In estimating the present value of future expected cash flows for reinsurance contracts, entities use assumptions consistent with those used for related direct insurance contracts. Additionally, estimates include the risk of reinsurer’s non-performance. [IFRS 17:63]

The risk adjustment for non-financial risk is estimated to represent the transfer of risk from the holder of the reinsurance contract to the reinsurer. [IFRS 17:64]

On initial recognition, the CSM is determined similarly to that of direct insurance contracts issued, except that the CSM represents net gain or loss on purchasing reinsurance. On initial recognition, this net gain or loss is deferred, unless the net loss relates to events that occurred before purchasing a reinsurance contract (in which case it is expensed immediately). [IFRS 17:65]

Subsequently, reinsurance contracts held are accounted similarly to insurance contracts under the general model. Changes in reinsurer’s risk of non-performance are reflected in profit or loss, and do not adjust the CSM. [IFRS 17:66-67]
`,
modifiactionOfAnInsuranceContract:`
If the terms of an insurance contract are modified, an entity shall derecognise the original contract and recognise the modified contract as a new contract if there is a substantive modification, based on meeting any of the specified criteria. [IFRS 17:72]

The modification is substantive if any of the following conditions are satisfied:

(a) if, had the modified terms been included at contract’s inception, this would have led to:
	(i) exclusion from the Standard’s scope; 
	(ii) unbundling of different embedded derivatives; 
	(iii) redefinition of the contract boundary; or 
	(iv) the reallocation to a different group of contracts; or
(b) if the original contract met the definition of a direct par insurance contracts, but the modified contract no longer meets that definition, or vice versa; or 
(c) the entity originally applied the PAA, but the contract’s modifications made it no longer eligible for it.
`,
Derecognition:`
An entity shall derecognise an insurance contract when it is extinguished, or if any of the conditions of a substantive modification of an insurance contract are met. [IFRS 17:74]
`,
presentationInFS:`
An entity shall present separately in the statement of financial position the carrying amount of groups of: [IFRS 17:78]

(a) insurance contracts issued that are assets; 
(b) insurance contracts issued that are liabilities; 
(c) reinsurance contracts held that are assets; and 
(d) reinsurance contracts held that are liabilities.

An entity shall disaggregate the amounts recognised in the statement(s) of financial performance into: [IFRS 17:80]

(a) an insurance service result, comprising insurance revenue and insurance service expenses; and 
(b) insurance finance income or expenses.
Income or expenses from reinsurance contracts held shall be presented separately from the expenses or income from insurance contracts issued. [IFRS 17:82]
`,
InsuranceServiceResult:`
An entity shall present in profit or loss revenue arising from the groups of insurance contracts issued, and insurance service expenses arising from a group of insurance contracts it issues, comprising incurred claims and other incurred insurance service expenses. Revenue and insurance service expenses shall exclude any investment components. An entity shall not present premiums in the profit or loss, if that information is inconsistent with revenue presented. [IFRS 17:83-85]
`,
InsuranceFinIncomOrExpns:`
Insurance finance income or expenses comprises the change in the carrying amount of the group of insurance contracts arising from: [IFRS 17:87]

(a) the effect of the time value of money and changes in the time value of money; and 
(b) the effect of changes in assumptions that relate to financial risk; but 
(c) excluding any such changes for groups of insurance contracts with direct participating insurance contracts that would instead adjust the CSM.
An entity has an accounting policy choice between including all of insurance finance income or expense for the period in profit or loss, or disaggregating it between an amount presented in profit or loss and an amount presented in other comprehensive income (“OCI”). [IFRS 17:88-90]

Under the general model, disaggregating means presenting in profit or loss an amount determined by a systematic allocation of the expected total insurance finance income or expenses over the duration of the group of contracts. On derecognition of the groups amounts remaining in OCI are reclassified to profit or loss. [IFRS 17:88, 91a]

Under the VFA, for direct par insurance contracts, only where the entity holds the underlying items, disaggregating means presenting in profit or loss as insurance finance income or expenses an amount that eliminates the accounting mismatches with the finance income or expenses arising on the underlying items. On derecognition of the groups, the amounts previously recognised in OCI remain there. [IFRS 17:89, 91b]
`,
Disclosures:`
An entity shall disclose qualitative and quantitative information about: [IFRS 17:93]

(a) the amounts recognised in its financial statements that arise from insurance contracts; 
(b) the significant judgements, and changes in those judgements, made when applying IFRS 17; and 
(c) the nature and extent of the risks that arise from insurance contracts.

`
}