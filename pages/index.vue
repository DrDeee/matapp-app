<template>
  <div>
    <div class="title is-3">Übersicht</div>
    <div class="mb-2">
      <nuxt-link to="/cases">
        <b-message icon="message" :has-icon="true" type="is-danger"
          ><b>Awarenessvorfälle</b><br />
          Dort werden alle Verwarnungen, Banns, etc. verwaltet.
        </b-message></nuxt-link
      >
    </div>
    <div class="mb-2">
      <nuxt-link to="/targets">
        <b-message icon="users" :has-icon="true" type="is-warning"
          ><b>Personen</b><br />
          Hier werden die Personen, gegen die wir Maßnahmen unternehmen mussten,
          verwaltet.
        </b-message></nuxt-link
      >
    </div>
    <div class="mb-2">
      <nuxt-link to="/chats">
        <b-message
          icon="whatsapp"
          icon-pack="fab"
          :has-icon="true"
          type="is-info"
          ><b>Chats &amp; Gruppen</b><br />
          Speichere hier alle, bzw. die notwendigen Gruppen, für die wir als
          Moderator:innen zuständig sind.
        </b-message></nuxt-link
      >
    </div>
    <div class="mb-2">
      <nuxt-link to="/profil">
        <b-message icon="user" :has-icon="true" type="is-success"
          ><b>Dein Profil</b><br />
          Hier kannst du einige Dinge an deinem Account ändern..
        </b-message></nuxt-link
      >
    </div>
  </div>
</template>
