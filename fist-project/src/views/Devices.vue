<script setup lang="ts">
import { Environment } from "@/models/devices";
import { reactive, ref } from "vue";
import { Device } from "@/models/devices";

const environments: Array<Environment> = reactive([]);

const ar: Device = reactive(new Device());
ar.name = "Ar condicionado";
ar.color = "#d1d1d1";
ar.icon = "mode_fan";

const tv: Device = reactive(new Device());
tv.name = "Smart TV";
tv.color = "#000000";
tv.state = false;
tv.icon = "tv";

const iluminacao: Device = reactive(new Device());
iluminacao.name = "Iluminação";
iluminacao.color = "#ebed6d";
iluminacao.icon = "light";

const sala: Environment = reactive(new Environment());
sala.name = "Sala";
sala.devices = [ar, tv, iluminacao];

// sala.devices.push(ar) -> "Empurra" o device ar para o Array. Poderia ser realizado deste modo, individualmente para cada device.
// sala.devices = [...sala.devices, tomada] -> Caso eu queira acrescentar um elemento, após já ter colocado outros dispositivos em forma de array.

environments.push(sala);
</script>

<template>
  <main
    class="flex flex-column text-center justify-content-center align-items-center"
  >
    <h1>Devices page!!!!</h1>
    <section class="environments flex flex-column border-round-sm">
      <div
        class="device"
        v-for="(environment, env_id) in environments"
        :key="env_id"
      >
        <h3>{{ environment.name }}</h3>
        <div v-for="(device, dev_id) in environment.devices" :key="dev_id">
          <section>
            <h5>{{ device.name }}</h5>

            <button>ON</button>
            <button>OFF</button>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<style setup lang="scss">
main {
  width: 100vw;
  min-width: 100vw;

  .environments {
    width: 90vw;
    min-height: 95vh;
    background-color: rgb(190, 190, 190);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
</style>
