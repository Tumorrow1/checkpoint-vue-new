<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';

const editableAccountData = ref = ({
    name: account.value.name,
    picture: account.value.picture,
    bio: account.value.bio,
    coverImg: account.value.coverImg,
    resume: account.value.resume,
    graduated: account.value.graduated
})



async function updateAccount() { }
try {
    await accountService.updateAccount(editableAccountData.value)
    
    catch (error) {
        Pop.error(error);
        logger.error(`[UPDATING ACCOUNT]`, error)
    }
}


</script>


<template>
    <form @submit.prevent="updateAccount()">
        <div class="mb-3">
            <label for="picture">account picture</label>
        </div>
    </form>
</template>


<style lang="scss" scoped></style>