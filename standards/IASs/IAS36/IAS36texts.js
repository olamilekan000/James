module.exports = {
overview:`
IAS 36 Impairment of Assets seeks to ensure that an entity's assets are not carried at more than their recoverable amount (i.e. the higher of fair value less costs of disposal and value in use). With the exception of goodwill and certain intangible assets for which an annual impairment test is required, entities are required to conduct impairment tests where there is an indication of impairment of an asset, and the test may be conducted for a 'cash-generating unit' where an asset does not generate cash inflows that are largely independent of those from other assets.

IAS 36 was reissued in March 2004 and applies to goodwill and intangible assets acquired in business combinations for which the agreement date is on or after 31 March 2004, and for all other assets prospectively from the beginning of the first annual period beginning on or after 31 March 2004.
`,
obj:`
To ensure that assets are carried at no more than their recoverable amount, and to define how recoverable amount is determined.
`,
scope:`
IAS 36 applies to all assets except: [IAS 36.2]

inventories (see IAS 2) 
assets arising from construction contracts (see IAS 11) 
deferred tax assets (see IAS 12) 
assets arising from employee benefits (see IAS 19) 
financial assets (see IAS 39) 
investment property carried at fair value (see IAS 40) 
agricultural assets carried at fair value (see IAS 41) 
insurance contract assets (see IFRS 4) 
non-current assets held for sale (see IFRS 5)

Therefore, IAS 36 applies to (among other assets):

land 
buildings 
machinery and equipment 
investment property carried at cost 
intangible assets 
goodwill 
investments in subsidiaries, associates, and joint ventures carried at cost 
assets carried at revalued amounts under IAS 16 and IAS 38
`,
impLoss:`
the amount by which the carrying amount of an asset or cash-generating unit exceeds its recoverable amount
`,
carryingAmt:`
the amount at which an asset is recognised in the balance sheet after deducting accumulated depreciation and accumulated impairment losses
`,
recoverableAmt:`
the higher of an asset's fair value less costs of disposal* (sometimes called net selling price) and its value in use

* Prior to consequential amendments made by IFRS 13 Fair Value Measurement, this was referred to as 'fair value less costs to sell'.
`,
fv:`
the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date (see IFRS 13 Fair Value Measurement)
`,
valueInUse:`
It is the present value of the future cash flows expected to be derived from an asset or cash-generating unit.

The calculation of value in use should reflect the following elements: [IAS 36.30]

- an estimate of the future cash flows the entity expects to derive from the asset 
- expectations about possible variations in the amount or timing of those future cash flows 
- the time value of money, represented by the current market risk-free rate of interest 
- the price for bearing the uncertainty inherent in the asset 
- other factors, such as illiquidity, that market participants would reflect in pricing the future cash flows the entity expects to derive from the asset

Cash flow projections should be based on reasonable and supportable assumptions, the most recent budgets and forecasts, and extrapolation for periods beyond budgeted projections. [IAS 36.33] IAS 36 presumes that budgets and forecasts should not go beyond five years; for periods after five years, extrapolate from the earlier budgets. [IAS 36.35] Management should assess the reasonableness of its assumptions by examining the causes of differences between past cash flow projections and actual cash flows. [IAS 36.34]

Cash flow projections should relate to the asset in its current condition – future restructurings to which the entity is not committed and expenditures to improve or enhance the asset's performance should not be anticipated. [IAS 36.44]

Estimates of future cash flows should not include cash inflows or outflows from financing activities, or income tax receipts or payments. [IAS 36.50]
`,
IdentifyingImpairedAsset:`
At the end of each reporting period, an entity is required to assess whether there is any indication that an asset may be impaired (i.e. its carrying amount may be higher than its recoverable amount). IAS 36 has a list of external and internal indicators of impairment. If there is an indication that an asset may be impaired, then the asset's recoverable amount must be calculated. [IAS 36.9]

The recoverable amounts of the following types of intangible assets are measured annually whether or not there is any indication that it may be impaired. In some cases, the most recent detailed calculation of recoverable amount made in a preceding period may be used in the impairment test for that asset in the current period: [IAS 36.10]
- an intangible asset with an indefinite useful life 
- an intangible asset not yet available for use 
- goodwill acquired in a business combination
`,
indicationOfImpairment:`
Indications of impairment [IAS 36.12]
External sources:

- market value declines 
- negative changes in technology, markets, economy, or laws 
- increases in market interest rates 
- net assets of the company higher than market capitalisation

Internal sources:
- obsolescence or physical damage 
- asset is idle, part of a restructuring or held for disposal 
- worse economic performance than expected 
- for investments in subsidiaries, joint ventures or associates, the carrying amount is higher than the carrying amount of the investee's assets, or a dividend exceeds the total comprehensive income of the investee

These lists are not intended to be exhaustive. [IAS 36.13] Further, an indication that an asset may be impaired may indicate that the asset's useful life, depreciation method, or residual value may need to be reviewed and adjusted. [IAS 36.17]

`,
determinRecovAmnt:`
- If fair value less costs of disposal or value in use is more than carrying amount, it is not necessary to calculate the other amount. The asset is not impaired. [IAS 36.19] 
- If fair value less costs of disposal cannot be determined, then recoverable amount is value in use. [IAS 36.20] 
- For assets to be disposed of, recoverable amount is fair value less costs of disposal. [IAS 36.21]
`,
costOfDisposal:`
Costs of disposal are the direct added costs only (not existing costs or overhead). [IAS 36.28]
`,
discountRate:`
In measuring value in use, the discount rate used should be the pre-tax rate that reflects current market assessments of the time value of money and the risks specific to the asset. [IAS 36.55]

The discount rate should not reflect risks for which future cash flows have been adjusted and should equal the rate of return that investors would require if they were to choose an investment that would generate cash flows equivalent to those expected from the asset. [IAS 36.56]

For impairment of an individual asset or portfolio of assets, the discount rate is the rate the entity would pay in a current market transaction to borrow money to buy that specific asset or portfolio.

If a market-determined asset-specific rate is not available, a surrogate must be used that reflects the time value of money over the asset's life as well as country risk, currency risk, price risk, and cash flow risk. The following would normally be considered: [IAS 36.57]
- the entity's own weighted average cost of capital 
- the entity's incremental borrowing rate 
- other market borrowing rates.
`,
recogOfimLoss:`
An impairment loss is recognised whenever recoverable amount is below carrying amount. [IAS 36.59] The impairment loss is recognised as an expense (unless it relates to a revalued asset where the impairment loss is treated as a revaluation decrease). [IAS 36.60] Adjust depreciation for future periods. [IAS 36.63]
`,
Cashgeneratingunits:`
Recoverable amount should be determined for the individual asset, if possible. [IAS 36.66]

If it is not possible to determine the recoverable amount (fair value less costs of disposal and value in use) for the individual asset, then determine recoverable amount for the asset's cash-generating unit (CGU). [IAS 36.66] The CGU is the smallest identifiable group of assets that generates cash inflows that are largely independent of the cash inflows from other assets or groups of assets. [IAS 36.6]
`,
ImpairmentOfGoodWill:`
Goodwill should be tested for impairment annually. [IAS 36.96]

To test for impairment, goodwill must be allocated to each of the acquirer's cash-generating units, or groups of cash-generating units, that are expected to benefit from the synergies of the combination, irrespective of whether other assets or liabilities of the acquiree are assigned to those units or groups of units. Each unit or group of units to which the goodwill is so allocated shall: [IAS 36.80]

- represent the lowest level within the entity at which the goodwill is monitored for internal management purposes; and 
- not be larger than an operating segment determined in accordance with IFRS 8 Operating Segments.

A cash-generating unit to which goodwill has been allocated shall be tested for impairment at least annually by comparing the carrying amount of the unit, including the goodwill, with the recoverable amount of the unit: [IAS 36.90]

- If the recoverable amount of the unit exceeds the carrying amount of the unit, the unit and the goodwill allocated to that unit is not impaired 
- If the carrying amount of the unit exceeds the recoverable amount of the unit, the entity must recognise an impairment loss.

The impairment loss is allocated to reduce the carrying amount of the assets of the unit (group of units) in the following order: [IAS 36.104]

- first, reduce the carrying amount of any goodwill allocated to the cash-generating unit (group of units); and 
- then, reduce the carrying amounts of the other assets of the unit (group of units) pro rata on the basis.

The carrying amount of an asset should not be reduced below the highest of: [IAS 36.105]

- its fair value less costs of disposal (if measurable) 
- its value in use (if measurable) 
- zero.

If the preceding rule is applied, further allocation of the impairment loss is made pro rata to the other assets of the unit (group of units).
`,
revOfImpLoss:`
Same approach as for the identification of impaired assets: assess at each balance sheet date whether there is an indication that an impairment loss may have decreased. If so, calculate recoverable amount. [IAS 36.110] No reversal for unwinding of discount. [IAS 36.116] The increased carrying amount due to reversal should not be more than what the depreciated historical cost would have been if the impairment had not been recognised. [IAS 36.117] Reversal of an impairment loss is recognised in the profit or loss unless it relates to a revalued asset [IAS 36.119] Adjust depreciation for future periods. [IAS 36.121] Reversal of an impairment loss for goodwill is prohibited. [IAS 36.124]

`,
Disclosure:`
Disclosure by class of assets: [IAS 36.126]

- impairment losses recognised in profit or loss 
- impairment losses reversed in profit or loss 
- which line item(s) of the statement of comprehensive income 
- impairment losses on revalued assets recognised in other comprehensive income 
- impairment losses on revalued assets reversed in other comprehensive income

Disclosure by reportable segment: [IAS 36.129]

- impairment losses recognised 
- impairment losses reversed

If an individual impairment loss (reversal) is material disclose: [IAS 36.130]

events and circumstances resulting in the impairment loss amount of the loss or reversal individual asset: nature and segment to which it relates cash generating unit: description, amount of impairment loss (reversal) by class of assets and segment if recoverable amount is fair value less costs of disposal, the level of the fair value hierarchy (from IFRS 13 Fair Value Measurement) within which the fair value measurement is categorised, the valuation techniques used to measure fair value less costs of disposal and the key assumptions used in the measurement of fair value measurements categorised within 'Level 2' and 'Level 3' of the fair value hierarchy* if recoverable amount has been determined on the basis of value in use, or on the basis of fair value less costs of disposal using a present value technique*, disclose the discount rate
* Amendments introduced by Recoverable Amount Disclosures for Non-Financial Assets, effective for annual periods beginning on or after 1 January 2014.


If impairment losses recognised (reversed) are material in aggregate to the financial statements as a whole, disclose: [IAS 36.131]

main classes of assets affected main events and circumstances
Disclose detailed information about the estimates used to measure recoverable amounts of cash generating units containing goodwill or intangible assets with indefinite useful lives. [IAS 36.134-35]
`



}