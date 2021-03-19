var candyMachine = {
    status:{
        name:'node',
        count:5
    },
    getCandy:function(){
        this.status.count--;
        console.log("getCandy function");
        return this.status.count;
    }
};

// candyMachine.status.count = 2;
const { getCandy, status: {count} } = candyMachine;

console.log(count);
