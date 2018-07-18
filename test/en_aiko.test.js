var chrono = require('../src/chrono');

test("Test - around", function() {

    var text = "Let's meet around 9pm";
    var results = chrono.parse(text, new Date(2018,7,18,12));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around 9pm');
        expect(result.start.get('hour')).toBe(21);

        var resultDate = result.start.date();
        var expectDate = new Date(2018,7,18,21);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }

    var text = "Dinner around 7?";
    var results = chrono.parse(text, new Date(2012,7,10,13));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around 7');
        expect(result.start.get('hour')).toBe(19);

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,19);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }

    var text = "Can we meet sometime around 12pm?";
    var results = chrono.parse(text, new Date(2012,7,10,5));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around 12pm');
        expect(result.start.get('hour')).toBe(12);

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,12);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }

    var text = "how about we meet around 11 for brunch";
    var results = chrono.parse(text, new Date(2012,7,10,9));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around 11');
        expect(result.start.get('hour')).toBe(11);

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,11);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }

    var text = "around half an hour ago";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around half an hour ago');
        expect(result.start.get('hour')).toBe(11);
        expect(result.start.get('minute')).toBe(44);

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,11,44);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }


    var text = "around 12 hours ago I did something";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around 12 hours ago');
        expect(result.start.get('hour')).toBe(0);
        expect(result.start.get('minute')).toBe(14);

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,0,14);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }


    var text = "around 12 seconds ago I did something";
    var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around 12 seconds ago');
        expect(result.start.get('hour')).toBe(12);
        expect(result.start.get('minute')).toBe(13);
        expect(result.start.get('second')).toBe(48);

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12, 13, 48);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }


    var text = "around three seconds ago I did something";
    var results = chrono.parse(text, new Date(2012, 7, 10, 12, 14));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around three seconds ago');
        expect(result.start.get('hour')).toBe(12);
        expect(result.start.get('minute')).toBe(13);
        expect(result.start.get('second')).toBe(57);

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 7, 10, 12, 13, 57);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }



    var text = "around 5 Days ago, we did something";
    var results = chrono.parse(text, new Date(2012,7,10));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2012);
        expect(result.start.get('month')).toBe(8);
        expect(result.start.get('day')).toBe(5);

        expect(result.text).toBe('around 5 Days ago');

        var resultDate = result.start.date();
        var expectDate = new Date(2012, 8-1, 5, 12);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }


    var text = " around half An hour ago";
    var results = chrono.parse(text, new Date(2012,7,10,12,14));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.text).toBe('around half An hour ago');
        expect(result.start.get('hour')).toBe(11);
        expect(result.start.get('minute')).toBe(44);

        var resultDate = result.start.date();
        var expectDate = new Date(2012,7,10,11,44);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }
});


test("Test - this week", function() {

    var text = "Can we meet Friday?";
    var results = chrono.parse(text, new Date(2018, 7-1, 18));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2018);
        expect(result.start.get('month')).toBe(7);
        expect(result.start.get('day')).toBe(20);

        expect(result.text).toBe('Friday');

        var resultDate = result.start.date();
        var expectDate = new Date(2018, 7-1, 20);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }

    var text = "She left Tuesday";
    var results = chrono.parse(text, new Date(2018, 7-1,18));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2018);
        expect(result.start.get('month')).toBe(8);
        expect(result.start.get('day')).toBe(17);

        expect(result.text).toBe('Tuesday');

        var resultDate = result.start.date();
        var expectDate = new Date(2018, 7-1, 17);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }


    var text = "Can we do dinner Thursday?";
    var results = chrono.parse(text, new Date(2018, 7-1, 18));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2018);
        expect(result.start.get('month')).toBe(7);
        expect(result.start.get('day')).toBe(19);

        expect(result.text).toBe('Thursday');

        var resultDate = result.start.date();
        var expectDate = new Date(2018, 7-1, 19);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }


    var text = "How about a meeting Saturday?";
    var results = chrono.parse(text, new Date(2018, 7-1, 18));
    expect(results.length).toBe(1);

    var result = results[0];
    if(result){
        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2018);
        expect(result.start.get('month')).toBe(7);
        expect(result.start.get('day')).toBe(21);

        expect(result.text).toBe('Saturday');

        var resultDate = result.start.date();
        var expectDate = new Date(2018, 7-1, 21);
        expect(expectDate.getTime()).toBeCloseTo(resultDate.getTime())
    }
});
