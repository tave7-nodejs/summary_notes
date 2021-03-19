// 가장 일반적인 함수 형태
function add1(x, y){
    return x+y;
}

// arrow function
const add2 = (x, y) => {
    return x+y;
};

// return문 밖에 없을 때 return문 생략
const add3 = (x,y) => x+y;

// return문 가독성있게 변경
const add4 = (x, y) => (x+y);

function not1(x) {
    return !x;
}

const not2 = x => !x;

// 함수 스코프의 범위가 다르기 때문에
// this를 that이라는 변수에도 저장해둔다
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        });
    }
};

relationship1.logFriends();

// 상위 스코프 참조 가능
var relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
};

relationship2.logFriends();