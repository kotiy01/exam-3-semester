<template>
    <header class="header">
        <div class="header__container">
            <router-link
            :to="{ name: 'main' }"
            class="header__logo"
            >
            Таск-трекер
            </router-link>
            <a href="" class="header__login">Войти</a>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,600&display=swap');

.header {
    width: 100%;
    height: 80px;
    background-color: #F9F9F9;
    border-bottom: 1px solid #D8D8D8;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header__container {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__logo {
    font-size: 28px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: black;
}

.header__login {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: #FFFFFF;
    border: 1px solid #66BFFF;
    border-radius: 4px;
    background-color: #66BFFF;
    padding: 6px 12px 6px 12px;
}
</style>