/**
	 * function for sorting array with multiple keys
	 * @param firstKey 
	 * @param secondKey 
	 */
 RankingSorter(firstKey, secondKey) {
  return function (a, b) {
    if (a[firstKey] > b[firstKey]) {
      return -1;
    } else if (a[firstKey] < b[firstKey]) {
      return 1;
    }
    else {
      if (a[secondKey] > b[secondKey]) {
        return 1;
      } else if (a[secondKey] < b[secondKey]) {
        return -1;
      } else {
        return 0;
      }
    }
  }
}
let arr = [
  {
    name: 'somo1',
    id: 282624,
    status: 1,
    ticketReferenceNo: 'AAC28262413820211017656848',
    buyInAmount: 680,
    eliminationTime: 1631530676370,
    tounamentPosition: 1,
    level: 2
  },
  {
    name: 'pqrs4',
    id: 281797,
    status: 1,
    ticketReferenceNo: 'AAC281797138202110412948516',
    buyInAmount: 610,
    eliminationTime: 1631530676370,
    tounamentPosition: 2,
    level: 2
  },
  {
    name: 'bugtesting',
    id: 279514,
    status: 1,
    ticketReferenceNo: 'AAC2795141382021102726239',
    buyInAmount: 560,
    eliminationTime: 1631530676369,
    tounamentPosition: 3,
    level: 2
  },
  {
    name: 'pqrs2',
    id: 281718,
    status: 1,
    ticketReferenceNo: 'AAC281718138202110284013099',
    buyInAmount: 440,
    eliminationTime: 1631530676370,
    tounamentPosition: 4,
    level: 2
  },
  {
    name: 'pqrs',
    id: 281705,
    status: 1,
    ticketReferenceNo: 'AAC281705138202110341101981',
    buyInAmount: 440,
    eliminationTime: 1631530676370,
    tounamentPosition: 5,
    level: 2
  },
  {
    name: 'somo3',
    id: 282628,
    status: 1,
    ticketReferenceNo: 'AAC282628138202110297982152',
    buyInAmount: 440,
    eliminationTime: 1631530676370,
    tounamentPosition: 6,
    level: 2
  },
  {
    name: 'Tom14',
    id: 282153,
    status: 1,
    ticketReferenceNo: 'AAC282153138202110272668243',
    buyInAmount: 440,
    eliminationTime: 1631530676370,
    tounamentPosition: 7,
    level: 2
  },
  {
    name: 'somo4',
    id: 282629,
    status: 1,
    ticketReferenceNo: 'AAC282629138202110541212839',
    buyInAmount: 390,
    eliminationTime: 1631530676370,
    tounamentPosition: 8,
    level: 2
  }
];
arr.sort(this.RankingSorter("buyInAmount", "eliminationTime"))

let resultObj = arr.reduce(function(r, a) {
  r[a.buyInAmount] = r[a.buyInAmount] || [];
  r[a.buyInAmount].push(a);
  return r;
}, Object.create(null));

let keys = Object.keys(resultObj);

// Sort the keys in descending order
keys.sort(function(a, b) {
  return b - a;
});

for (var i = 0; i < keys.length; i++) {
  console.log(keys[i], resultObj[keys[i]]);
}
