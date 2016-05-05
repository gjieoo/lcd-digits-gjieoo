describe("lcd-digits",function () {

    var number;
    var inputs;
    beforeEach(function () {
        
        number=987;
        inputs=[
                ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
                ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
                ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']
        ]
    });
    it("should print correct number",function () {

        spyOn(console, 'log');

        printLcdNum(number,inputs);
        var printNum='显示结果为：'+'\n'+'._.'+'._.'+'._.'+'\n'+
                                        '|_|'+'|_|'+'..|'+'\n'+
                                        '..|'+'|_|'+'..|';
            

        expect(console.log).toHaveBeenCalledWith(printNum);

    });

});
describe("unit",function () {

    var num;
    beforeEach(function () {
        num=937;
        inputs=[
                ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
                ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
                ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']

        ]
    });
    describe("num to string",function () {

    it("one num to string",function () {

        var numString=numToString(9);
        var printString=['9'];

        expect(numString).toEqual(printString);
    });
    it("nums to string",function () {

        var numString=numToString(num);
        var printString=['9','3','7'];

        expect(numString).toEqual(printString);
    });
   });
    describe("show lcd-digit",function () {
        it("show one num Lcd-digit",function () {
            var nString=numToString(9);
            var numString=buildLcdDigits(nString,inputs);
            var lcdDigit=[
                '._.',
                '|_|',
                '..|'];
            expect(numString).toEqual(lcdDigit);
        });
        it("show nums Lcd-digit",function () {
            var numtoString=numToString(num);
            var numString=buildLcdDigits(numtoString,inputs);
            var lcdDigit=[    '._.',
                '|_|',
                '..|',
                '._.',
                '._|',
                '._|',
                '._.',
                '..|',
                '..|'
            ];
            expect(numString).toEqual(lcdDigit);
        });
    });
   describe("show lcd-digits string",function () {
       it("show a numsString lcd-digits",function () {
           var numtoString=numToString(9);
           var lcdDigits=buildLcdDigits(numtoString,inputs);
           var lcdString=toLcdString(lcdDigits);
           var printNumString='显示结果为：'+'\n'+'._.'+'\n'+
               '|_|'+'\n'+
               '..|';
           expect(lcdString).toEqual(printNumString);

       });
       it("show numsString lcd-digits",function () {
           var numtoString=numToString(num);
           var lcdDigits=buildLcdDigits(numtoString,inputs);
           var lcdString=toLcdString(lcdDigits);
           var printNumsString='显示结果为：'+'\n'+'._.'+'._.'+'._.'+'\n'+
               '|_|'+'._|'+'..|'+'\n'+
               '..|'+'._|'+'..|';
           expect(lcdString).toEqual(printNumsString);

       });
   });


});
