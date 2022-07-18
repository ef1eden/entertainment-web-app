<template>
  <div class="search-container">
    <img class="search-icon" src="@/assets/images/svg/icon-search.svg"/>
    <input type="search" class="search" placeholder="Search for movies or TV series" v-model="searchValue" @input="valueChange()">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: 'SearchBar',
    components: {
    },
    setup() {
        const searchValue = ref('');

        function valueChange() {
           console.log(searchValue.value);
        }

    
        return { valueChange, searchValue }
    }
}
</script>

<style lang="scss" scoped>
.search-container {
    display: flex;
    align-items: center;
    margin-top: 19px;
    padding-right: 36px;

    @media(max-width: 768px) {
        margin-top: -13px;
    }

    :deep(.search-icon) {
        margin-right: 23px;
        position: relative;
        top: -1px;

        @media(max-width: 600px) {
            width: 24px;
            margin-right: 16px;
            top: 0;
        }
    }

    .search {
        width: 100%;
        height: 60px;
        background: none;
        border: 0;
        border-bottom: 1px solid transparent;
        color: #fff;
        font-size: 24px;
        line-height: 30px;
        font-weight: 300;
        font-family: $font-family-main;
        caret-color: $main-color;
        transition: all .4s ease;

        @media(max-width: 600px) {
            font-size: 16px;
        }

        &::placeholder {
            color: rgba(255,255,255,0.5);
        }

        &:focus {
            border-bottom: 1px solid $greyish-blue;
            box-shadow: none;
            outline: none;
        }

        &::-webkit-search-decoration, 
        &::-webkit-search-cancel-button, 
        &::-webkit-search-results-button, 
        &::-webkit-search-results-decoration {
            -webkit-appearance:none;
        }
    }
}
</style>