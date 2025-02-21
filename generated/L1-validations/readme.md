

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_13**: $.message.intent.fulfillment.stops[*].location.gps must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["search"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.intent.fulfillment.vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.intent.fulfillment.vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.intent.fulfillment.vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.intent.fulfillment.type must be in ["DELIVERY", "SELF_PICKUP"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END"]
	  - **condition validate_enum_9.2**: $.message.intent.fulfillment.stops[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.intent.fulfillment.stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.intent.fulfillment.stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.intent.fulfillment.state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.intent.payment.status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.status must **not** be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.intent.payment.collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_14.2**: $.message.intent.payment.collected_by must be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.intent.payment.type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.type must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.intent.payment.tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["select"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.billing.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.fulfillments[*].customer.person.name must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["init"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_14.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_16.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	  - **condition validate_enum_16.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.billing.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.payments[*].params.virtual_payment_address must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.fulfillments[*].customer.person.name must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["confirm"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_14.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_16.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	  - **condition validate_enum_16.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_1_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["status"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order_id must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["cancel"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.cancellation_reason_id must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]
	  - **condition validate_enum_5.2**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.descriptor.code must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	  - **condition validate_enum_6.2**: $.message.descriptor.code must be present in the payload

- **update** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.id must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["update"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_17**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "DISTANCE_FARE", "CANCELLATION_CHARGES", "REFUND", "TOLL_CHARGES", "PARKING_CHARGES", "TAX", "WAITING_CHARGES", "DRIVER_BATA", "NIGHT_CHARGES"]
	
		> Note: **Condition validate_enum_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.catalog.descriptor.name must be present in the payload
	
	- **condition validate_attribute_15**: $.message.catalog.providers[*].id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_19**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_attribute_21**: $.message.catalog.providers[*].id must be present in the payload
	
	- **condition validate_attribute_23**: $.message.catalog.providers[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_24**: $.message.catalog.providers[*].items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_25**: $.message.catalog.providers[*].items[*].price.value must be present in the payload
	
	- **condition validate_attribute_26**: $.message.catalog.providers[*].items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_search"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.catalog.providers[*].descriptor.code must be in ["RIDE"]
	  - **condition validate_enum_5.2**: $.message.catalog.providers[*].descriptor.code must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.catalog.providers[*].payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].type must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.catalog.providers[*].items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_BUYER_FINDER_FEES**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_1_SETTLEMENT_TERMS**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_select"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_17**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_17.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "DISTANCE_FARE", "CANCELLATION_CHARGES", "REFUND", "TOLL_CHARGES", "PARKING_CHARGES", "TAX", "WAITING_CHARGES", "DRIVER_BATA", "NIGHT_CHARGES"]
	  - **condition validate_enum_17.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].payment_ids[*] must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.fulfillments[*].customer.person.name must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_39**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_40**: $.message.order.payments[*].params.virtual_payment_address must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.cancellation_terms[*].reason_required must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_init"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_14.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_16.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	  - **condition validate_enum_16.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_enum_17**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_17.1**: every element of $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	  - **condition validate_enum_17.2**: $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be present in the payload
	
	- **condition validate_enum_18**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_18.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "DISTANCE_FARE", "CANCELLATION_CHARGES", "REFUND", "TOLL_CHARGES", "PARKING_CHARGES", "TAX", "WAITING_CHARGES", "DRIVER_BATA", "NIGHT_CHARGES"]
	  - **condition validate_enum_18.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_1_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].payment_ids[*] must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.fulfillments[*].customer.person.name must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.fulfillments[*].vehicle.make must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.fulfillments[*].vehicle.model must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.fulfillments[*].vehicle.registration must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition validate_attribute_37**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_43**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_44**: $.message.order.payments[*].params.virtual_payment_address must be present in the payload
	
	- **condition validate_attribute_46**: $.message.order.cancellation_terms[*].reason_required must be present in the payload
	
	- **condition validate_attribute_48**: $.message.order.created_at must be present in the payload
	
	- **condition validate_attribute_49**: $.message.order.updated_at must be present in the payload
	
	- **condition validate_attribute_50**: $.message.order.id must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_confirm"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_13.1**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	  - **condition validate_enum_13.2**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_14.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_16.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	  - **condition validate_enum_16.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_enum_17**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_17.1**: every element of $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	  - **condition validate_enum_17.2**: $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be present in the payload
	
	- **condition validate_enum_18**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_18.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "DISTANCE_FARE", "CANCELLATION_CHARGES", "REFUND", "TOLL_CHARGES", "PARKING_CHARGES", "TAX", "WAITING_CHARGES", "DRIVER_BATA", "NIGHT_CHARGES"]
	  - **condition validate_enum_18.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_enum_19**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_19.1**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	  - **condition validate_enum_19.2**: $.message.order.status must be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_1_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].payment_ids[*] must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.fulfillments[*].customer.person.name must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.fulfillments[*].agent.person.name must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.fulfillments[*].agent.contact.phone must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.fulfillments[*].vehicle.registration must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.fulfillments[*].vehicle.make must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.fulfillments[*].vehicle.model must be present in the payload
	
	- **condition validate_attribute_35**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition validate_attribute_39**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition validate_attribute_40**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_43**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_46**: $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be present in the payload
	
	- **condition validate_attribute_47**: $.message.order.cancellation_terms[*].reason_required must be present in the payload
	
	- **condition validate_attribute_48**: $.message.order.id must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_13.1**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	  - **condition validate_enum_13.2**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_14.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_16.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	  - **condition validate_enum_16.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_enum_17**: every element of $.message.order.cancellation.reason.descriptor.code must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]
	
		> Note: **Condition validate_enum_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.cancellation.reason.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_18**: every element of $.message.order.cancellation.cancelled_by must be in ["CONSUMER", "PROVIDER"]
	
		> Note: **Condition validate_enum_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.cancellation.cancelled_by must **not** be present in the payload
	
	- **condition validate_enum_19**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_19.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "DISTANCE_FARE", "CANCELLATION_CHARGES", "REFUND", "TOLL_CHARGES", "PARKING_CHARGES", "TAX", "WAITING_CHARGES", "DRIVER_BATA", "NIGHT_CHARGES"]
	  - **condition validate_enum_19.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_enum_20**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_20.1**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	  - **condition validate_enum_20.2**: $.message.order.status must be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_1_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].payment_ids[*] must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.fulfillments[*].vehicle.registration must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.fulfillments[*].customer.person.name must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.fulfillments[*].agent.person.name must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.fulfillments[*].agent.contact.phone must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition validate_attribute_37**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_43**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_44**: $.message.order.payments[*].params.virtual_payment_address must be present in the payload
	
	- **condition validate_attribute_45**: $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be present in the payload
	
	- **condition validate_attribute_46**: $.message.order.cancellation_terms[*].reason_required must be present in the payload
	
	- **condition validate_attribute_48**: $.message.order.created_at must be present in the payload
	
	- **condition validate_attribute_49**: $.message.order.updated_at must be present in the payload
	
	- **condition validate_attribute_50**: $.message.order.id must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_13.1**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	  - **condition validate_enum_13.2**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_14.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_16.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	  - **condition validate_enum_16.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_enum_17**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_17.1**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	  - **condition validate_enum_17.2**: $.message.order.status must be present in the payload
	
	- **condition validate_enum_18**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_18.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "DISTANCE_FARE", "CANCELLATION_CHARGES", "REFUND", "TOLL_CHARGES", "PARKING_CHARGES", "TAX", "WAITING_CHARGES", "DRIVER_BATA", "NIGHT_CHARGES"]
	  - **condition validate_enum_18.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_1_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].payment_ids[*] must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.fulfillments[*].customer.person.name must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_39**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_40**: $.message.order.payments[*].params.virtual_payment_address must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.cancellation_terms[*].reason_required must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_status"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_3.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition validate_enum_3.2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV10"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["RIDE"]
	  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_enum_6**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["AUTO_RICKSHAW", "CAB", "TWO_WHEELER"]
	  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["SEDAN", "SUV", "HATCHBACK", "TWO_WHEELER", "AUTO_RICKSHAW"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.variant must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].vehicle.energy_type must be in ["ELECTRIC", "PETRO", "DIESEL", "HYDROGEN", "BIOFUELS", "CNG", "LPG"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.energy_type must **not** be present in the payload
	
	- **condition validate_enum_9**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].type must be in ["DELIVERY", "SELF_PICKUP"]
	  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].type must be in ["START", "END"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_14.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_14.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_15**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_15.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_15.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_16**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_16.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-ORDER", "ON-FULFILLMENT"]
	  - **condition validate_enum_16.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_enum_17**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_17.1**: every element of $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be in ["RIDE_CANCELLED", "RIDE_ENDED", "RIDE_STARTED", "RIDE_ASSIGNED", "RIDE_ENROUTE_PICKUP", "RIDE_ARRIVED_PICKUP", "RIDE_CONFIRMED"]
	  - **condition validate_enum_17.2**: $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be present in the payload
	
	- **condition validate_enum_18**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_18.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "DISTANCE_FARE", "CANCELLATION_CHARGES", "REFUND", "TOLL_CHARGES", "PARKING_CHARGES", "TAX", "WAITING_CHARGES", "DRIVER_BATA", "NIGHT_CHARGES"]
	  - **condition validate_enum_18.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_enum_19**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition validate_enum_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_FARE", "MIN_FARE_DISTANCE_KM", "PER_KM_CHARGE", "PICKUP_CHARGE", "WAITING_CHARGE_PER_MIN", "NIGHT_CHARGE_MULTIPLIER", "NIGHT_SHIFT_START_TIME", "NIGHT_SHIFT_END_TIME"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='INFO')].list[*].descriptor.code must be in ["DISTANCE_TO_NEAREST_DRIVER_METER", "ETA_TO_NEAREST_DRIVER_MIN"]
	
	- **condition validate_tag_1**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_1_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ENCODED_POLYLINE", "WAYPOINTS"]