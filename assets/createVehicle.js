export default {
    data() {
        return {
            message: "Crear Vehículo",
            time: "",
            inEdition: false,
            vehicle: {
                type: null,
                plaque: "",
                color: "",
                make: "",
                city: "",
                dateInput:"",
                hourInput: "",
                dateOutput:"",
                hourOuput: "",
                acciones: true
            },
            list_vehicles: [
                {
                    type: "carro",
                    plaque: "FGR 103",
                    color: "Plata",
                    make: "Chevrolet",
                    city: "Envigado",
                    dateInput:"2020-03-14",
                    hourInput: "14:03",
                    dateOutput:"",
                    hourOuput: "",
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
            return this.vehicle.type != null
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

        validationDate() {
            return this.vehicle.dateInput.length > 0
        },

        validationHour() {
            return this.vehicle.hourInput > 0 && this.vehicle.hourInput < 24 
        }

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
                dateInput:"",
                hourInput: "",
                dateOutput:"",
                hourOuput: "",
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
                dateInput:"",
                hourInput: "",
                dateOutput:"",
                hourOuput: "",
                acciones: true
            };
            this.saveLocalStorage();
        },

        getLocalStorage() {
            if (localStorage.getItem("vehicles")) {
                this.list_vehicles = JSON.parse(localStorage.getItem("vehicles"));
            }
        },

        valuePay(item){
            if(item == "carro"){
                return this.time * 8000;
            }else if(item == "moto"){
                return this.time * 4000;
            }else if(item == "bicicleta"){
                return this.time * 2000;
            }else{
                return this.time * 21000;
            }
        },

        giveOut({item}){
            let vh = this.list_vehicles.find(
                vehicle => vehicle.placa == item.placa
            );
            var now = new Date();
            let dateOutput = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDay();
            let hourOuput = now.getHours() + ":" + now.getMinutes();
            vh.dateOutput = dateOutput;
            vh.hourOuput = hourOuput;
            let srt = vh.dateInput.split("-")
            let hur = vh.hourInput.split(":")
            let date = new Date(srt[0], (srt[1] - 1), srt[2], hur[0], hur[1]);
            var time = (now.getTime() - date.getTime())/(1000 * 60 * 60);
            this.time = Math.round(time);
            this.inEdition = true;
            this.vehicle = Object.assign({}, vh);
            this.saveLocalStorage();






        const h = this.$createElement
        // Using HTML string
        const titleVNode = h('div', { domProps: { innerHTML: 'Dar salida al vehículo' } })
        // More complex structure
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center'] }, [
            h('strong', vh.plaque),
          ]),
          h('p', { class: ['text-center'] }, [
            'El vehículo tuvo una permanencia de ',
            h('strong', this.time),
            ' horas ',
          ]),
          h('b-img', {
            props: {
              src: 'https://vectorified.com/images/payment-icon-png-5.png',
              thumbnail: true,
              center: true,
              fluid: true, rounded: 'circle'
            }
          }),
          h('p', { class: ['text-center'] }, [
            'El valor a pagar es ',
            h('strong', this.valuePay(vh.type)),
            ' pesos ',
          ]),
        ])
        // We must pass the generated VNodes as arrays
        this.$bvModal.msgBoxOk([messageVNode], {
          title: [titleVNode],
          
          okTitle: 'Aceptar',
          centered: true, 
        })
        },

        showMsgOk () {
            
          }
     
    }
};