<script setup lang="ts">
import { Envirolment } from "@/models/devices";
import { reactive, ref } from "vue";
import { Device } from "@/models/devices";

const enviroments: Array<Envirolment> = reactive([]);

const ar: Device = reactive(new Device());
ar.name = "Ar condicionado";
ar.color = "#d1d1d1";

const tv: Device = reactive(new Device());
tv.name = "Smart TV";
tv.color = "#000000";
tv.state = false;

const iluminacao: Device = reactive(new Device());
iluminacao.name = "Iluminação";
iluminacao.color = "#ebed6d";

const sala: Envirolment = reactive(new Envirolment());
sala.name = "Sala";
sala.devices = [ar, tv, iluminacao];

// sala.devices.push(ar) -> "Empurra" o device ar para o Array. Poderia ser realizado deste modo, individualmente para cada device.
// sala.devices = [...sala.devices, tomada] -> Caso eu queira acrescentar um elemento, após já ter colocado outros dispositivos em forma de array.

enviroments.push(sala);
</script>
<template>
  <main class="flex flex-column">
    <h1>Devices!!</h1>
    <section class="enviroments flex flex-column">

    </section>
  </main>
</template>

<style setup lang="scss">
  main {
    width: 100vw;
    min-width: 100vw;
    .enviroments {
      width: 100vw;
      min-width: 100vw;
      color: red;
    }
  }
</style>
