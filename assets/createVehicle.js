export default {
    data() {
        return {
            message: "Crear Vehículo",
            inEdition: false,
            vehicle: {
                type: null,
                plaque: "",
                color: "",
                make: "",
                city: "",
                date:"",
                hour: "",
                acciones: true
            },
            list_vehicles: [
                {
                    type: "carro",
                    plaque: "FGR 103",
                    color: "Plata",
                    make: "Chevrolet",
                    city: "Envigado",
                    date:"2020-03-14",
                    hour: "14:03",
                    acciones: true
                }
            ],
            options_type: [
                { value: "carro", text: "Carro" },
                { value: "moto", text: "Moto" },
                { value: "bicicleta", text: "Bicicleta" },
                { value: "camion", text: "Camión" }
            ]
        };
    },
    mounted() {

    },
    computed: {
        validationType() {
            return this.vehicle.type.length > 0
        },

        validationPlaque() {
            return this.vehicle.plaque.length > 0
        },

        validationColor() {
            return this.vehicle.color.length > 0
        },

        validationMake() {
            return this.vehicle.make.length > 0
        },

        validationCity() {
            return this.vehicle.city.length > 0
        },

    },
    methods: {
        createVehicle() {
            this.list_vehicles.push(this.vehicle);
            this.vehicle = {
                type: null,
                plaque: "",
                color: "",
                make: "",
                city: "",
                date:"",
                hour: "",
                acciones: true
            };
            this.saveLocalStorage();

        },
        deleteVehicle({ item }) {
            let position = this.list_vehicles.findIndex(
                vehicle => vehicle.placa == item.placa
            );
            this.list_vehicles.splice(position, 1);
            this.saveLocalStorage();
        },
        loadVehicle({ item }) {
            let vh = this.list_vehicles.find(
                vehicle => vehicle.placa == item.placa
            );
            this.inEdition = true;
            this.vehicle = Object.assign({}, vh);
            this.saveLocalStorage();
        },
        saveLocalStorage() {
            localStorage.setItem("vehicles", JSON.stringify(this.list_vehicles));
        },
        getLocalStorage() {
            if (localStorage.getItem("vehicles")) {
                this.list_vehicles = JSON.parse(localStorage.getItem("vehicles"));
            }
        },
        updateVehicle() {
            let position = this.list_vehicles.findIndex(
                vehicle => vehicle.placa == this.vehicle.placa
            );
            this.list_vehicles.splice(position, 1, this.vehicle);
            this.vehicle = {
                type: null,
                plaque: "",
                color: "",
                make: "",
                city: "",
                date:"",
                hour: "",
                acciones: true
            };
            this.saveLocalStorage();
        }
    }
};