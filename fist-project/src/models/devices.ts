export class Device {
    name: string = '';
    state: boolean = false;
    color: string = "#827d85";
}

export class Envirolment {
    name: string = "";
    devices: Array<Device> = []
}
