<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { ref } from 'vue';


const editableAccountData = ref({ ...AppState.account })



async function updateAccount() {
    try {
        await accountService.updateAccount(editableAccountData.value)
    }
    catch (error) {
        Pop.error(error);
        logger.error(`[UPDATING ACCOUNT]`, error)
    }
}


</script>


<template>
    <form @submit.prevent="updateAccount()">
        <!-- TODO add the form fields -->
        <div class="mb-3">
            <label for="picture">account picture</label>
        </div>
    </form>
</template>


<style lang="scss" scoped></style>