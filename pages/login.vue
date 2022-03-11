<template>
  <div class="columns is-centered">
    <div class="column">
      <b-message type="is-info" title="Willkommen bei der MAT-App!" :closable="false">
        <p class="mb-2">
          Hier verwaltet das Moderations- und Awarenessteam alle
          Awarenessvorfälle und alle kritischen Situationen, die in den Gruppen
          der Bundesebene auftreten.
        </p>
        <p class="mb-4">
          Nur das MAT hat Zugriff auf die Daten. Falls du Zugriff darauf
          brauchst, melde dich einfach bei einem Menschen aus dem Team, wir
          entscheiden dann, ob deine Anfrage gerechtfertigt ist.
        </p>
        <div class="columns is-centered">
          <div class="column is-half">
            <b-button type="is-info" expanded @click="$auth.loginWith('cloud')"
              >Anmelden</b-button
            >
          </div>
        </div>
      </b-message>
    </div>
  </div>
</template>
