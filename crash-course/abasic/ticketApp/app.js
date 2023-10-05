Vue.createApp({
    data() {
        return {
            busSeats: [
                [
                    {
                        name: 'A1',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'A2',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'A3',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'A4',
                        type: 'available',
                        price: 800,
                    }
                ],
                [
                    {
                        name: 'B1',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'B2',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'B3',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'B4',
                        type: 'available',
                        price: 800,
                    }
                ],
                [
                    {
                        name: 'C1',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'C2',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'C3',
                        type: 'available',
                        price: 800,
                    },
                    {
                        name: 'C4',
                        type: 'available',
                        price: 800,
                    }
                ], 
                [
                    {
                        name: 'D1',
                        type: 'available',
                        price: 700,
                    },
                    {
                        name: 'D2',
                        type: 'available',
                        price: 700,
                    },
                    {
                        name: 'D3',
                        type: 'available',
                        price: 700,
                    },
                    {
                        name: 'D4',
                        type: 'available',
                        price: 700,
                    }
                ], 
                [
                    {
                        name: 'E1',
                        type: 'booked',
                        price: 650,
                    },
                    {
                        name: 'E2',
                        type: 'available',
                        price: 650,
                    },
                    {
                        name: 'E3',
                        type: 'available',
                        price: 650,
                    },
                    {
                        name: 'E4',
                        type: 'available',
                        price: 650,
                    }
                ], 
                [
                    {
                        name: 'F1',
                        type: 'available',
                        price: 600,
                    },
                    {
                        name: 'F2',
                        type: 'available',
                        price: 600,
                    },
                    {
                        name: 'F3',
                        type: 'available',
                        price: 600,
                    },
                    {
                        name: 'F4',
                        type: 'available',
                        price: 600,
                    }
                ]
            ],
            coupon: {
                name: '100TKOFF',
                discount: 100
            },
            couponCode: '',
            discountCoupon: 0,
            name: '',
            phone: '',
            
        }
    },
    computed: {
        selectedSeats() {
            let stored = [];
            let totalCost = 0;
            for(let i = 0; i < 6; i++) {
                for(let j = 0; j < 4; j++) {
                   if (this.busSeats[i][j].type == 'selected') {
                        stored.push(this.busSeats[i][j])
                    }
                }
            }

            if (stored.length != 0) {
                for (let i = 0; i < stored.length; i++) {
                    totalCost += stored[i].price;
                }
            }
            
           return [stored, totalCost];
        },
    },
    methods: {
        selectSeat(index,seatName) {
            let seatCol = this.busSeats[index].length;
            for (let i = 0; i < seatCol; i++) {
               if (
                this.busSeats[index][i].name == seatName && 
                this.busSeats[index][i].type != 'sold' && 
                this.busSeats[index][i].type != 'booked'
                ) {
                    if (this.busSeats[index][i].type == 'selected' ) { 
                        this.busSeats[index][i].type = 'available'
                   } else {

                       this.busSeats[index][i].type = 'selected'
                   }
               } 
                
            }
        },
        bookedSeats() {
            if (this.name !== '' && this.phone !== '') {
                for(let i = 0; i < 6; i++) {
                    for(let j = 0; j < 4; j++) {
                       if (this.busSeats[i][j].type == 'selected') {
                            this.busSeats[i][j].type = 'booked';
                            this.name = '';
                            this.phone = '';
                            this.couponCode = '';
                       }
                    }
                }
            } else {
                alert("please type your name and number");
            }
        }
    },
    
    watch: {
        couponCode(newValue) {
            if (newValue == this.coupon.name) {
                this.discountCoupon = this.coupon.discount;
            }
        }
    },

}).mount("#app");