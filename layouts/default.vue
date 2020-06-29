<template>
  <v-app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 204px"
        class="ml-0 pl-4"
      >
        <nuxt-link 
          to="/"
          style="text-decoration:none"
        >
          <strong style="color:white;">백석 이슈 트래커</strong>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-avatar v-if="$store.state.user.auth" color="red">
        <span 
          style="text-transform:uppercase"
          class="white--text headline"
        >
          {{$store.state.user.nickname[0]}}
        </span>
      </v-avatar>
      <v-btn 
        v-else
        text nuxt to="/login" 
        :style="{ display: 'flex', alignItems: 'center' }"
      >
        <strong style="font-size:16px">로그인</strong>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>