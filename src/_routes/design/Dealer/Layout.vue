<template>
	<div>
    Stripe users in the United States can receive ACH Credit Transfers directly from customers using Sources—a single integration path for creating payments using any supported method.

During the payment process, a Source object is created and your customer is provided with bank account information to send a required amount to. Your customer uses this information to make a transfer from their bank account using the U.S. ACH system (the customer-facing transfer portal is referred to as Bill Pay by many banks) or domestic wire transfer. After the transfer is received, your integration uses the source to make a charge request and complete the payment.

ACH Credit Transfers is a push-based and reusable method of payment. This means your customer must take action to send funds to you, which can take a few days to arrive. After the funds arrive, there is synchronous confirmation of any charge request made.

Step 1: Create a Source object
You can create a Source object server-side using the Source creation endpoint. Stripe returns a Source object containing the relevant details for the method of payment used. Information specific to ACH is provided within the ach_credit_transfer subhash. The following parameters should be passed to create a Source object:
  </div>
</template>

<script>
export default {
  computed: {
  },
  data: function() {
    return {
    }
  },
  watch: {
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
