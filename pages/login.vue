<template>
  <div class="columns is-centered">
    <div class="column is-four-fifths">
      <b-message type="is-primary">
        <p class="title is-5">Willkommen bei der MAT-App!</p>
        <p class="mb-2">
          Hier verwaltet das Moderations- und Awarenessteam alle
          Awarenessvorfälle und alle kritischen Situationen, die in den
          Deli-Gruppen der Bundesebene auftreten.
        </p>
        <p class="mb-4">
          Nur das MAT hat Zugriff auf die Daten. Falls du Zugriff darauf
          brauchst, melde dich einfach bei einem Menschen aus dem Team, wir
          entscheiden dann, ob deine Anfrage gerechtfertigt ist.
        </p>
        <div class="columns is-centered">
          <div class="column is-half">
            <b-button
              type="is-primary"
              expanded
              @click="$auth.loginWith('cloud')"
              >Anmelden</b-button
            >
          </div>
        </div>
      </b-message>
    </div>
  </div>
</template>
