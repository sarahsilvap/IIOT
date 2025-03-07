<script setup lang="ts">
import { Device } from "@/models/devices";

const props = defineProps({
  device: { type: Device, required: true, state: false },
});

// const props = defineProps<Device>({ -> Poderia ser realizado também desta forma
//   device: { required: true },
// });
</script>

<template>
  <section
    :class="`flex flex-column text-center align-items-center justify-content-center device-${props.device.state}`"
  >
    <h5>{{ props.device.name }}</h5>
    <span class="icons material-icons-round">{{ props.device.icon }}</span>
    <div class="flex flex-row">
      <button class="device-buttons on-button">ON</button>
      <button class="device-buttons off-button">OFF</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
section{
        background-color: rgb(221, 221, 221);
        border: 1px solid rgb(65, 65, 65);
        width: 10rem;
        height: 6rem;
        margin: 0.5rem;
        .icons{
            width: 1.5rem;
            margin: 0.5rem;          
        }
    }

.device-buttons {
  margin: 2px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    //opacity: 0.8;
    transform: scale(1.1);
    transition: 0.3s;
  }
}

.device-true {
  .on-button {
    background-color: green;
  }
  .off-button {
    background-color: white;
  }
}

.device-false {
  .on-button {
    background-color: white;
  }
  .off-button {
    background-color: red;
  }
}
</style>
