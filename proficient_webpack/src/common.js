export function helloworld () {
    return 'Hello World'
}

// (function () {
//     let page = 0;
//     let timerGetPage;
//     let timerPass;

//     function doit (start, end) {
//         page = start;
//         timerGetPage = setInterval(function () {
//             if (page > end) {
//                 clearInterval(timerGetPage);
//             } else {
//                 getPage(page);
//                 page++;
//             }
//         }, 4000);
//     }

//     function getPage (page) {
//         let url = "https://www.chinahtz.com/sizeContacts/list.do?" 
//             + "tab=2" + "&page=" + page;
//         $.get(url, function (data) {
//             let idList = getIds(data);
//             passBC(idList);
//         });
//     }

//     function getIds (html) {
//         let idList = html.match(/onclick="detil\([\d\s,']+\)">/g);
//         let temp = [];
//         for (let i=0; i<idList.length; i++) {
//             let ID = idList[i].split('onclick="detil(');
//             ID = ID[1].split(',');
//             ID = $.trim(ID[1]);
//             temp.push(ID);
//         }
//         return temp;
//     }

//     function passBC (idList) {
//         let IDindex = 0;
//         timerPass = setInterval(function () {
//             if (IDindex == idList.length) {
//                 clearInterval(timerPass);
//             } else {
//                 $.post("https://www.chinahtz.com/blog/notebook/exchangeNoteBook.do", {
//                     exchangeId: idList[IDindex],
//                     type: 0,
//                     userType: 0
//                 }, "json");
//                 IDindex++;
//             }
//         }, 200)
//     }

//     doit(1, 200);

// })();