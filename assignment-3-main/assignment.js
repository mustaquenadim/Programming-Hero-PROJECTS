// https://github.com/mustaquenadim/assignment-3

/* kilometerToMeter function */
function kilometerToMeter (km)
{
    if (km > -1)
    {
        var meter = km * 1000;      // 1 kilometer = 1000 meter
        return meter;
    }
    else
    {
        return "Please enter a positive number!";
    }
}



/* budgetCalculator function */
// watch price -> $50
// phone price -> $100
// laptop price -> $500
function budgetCalculator (numOfWatch, numOfPhone, numOfLaptop)
{
    if ((numOfWatch > -1) && (numOfPhone > -1) && (numOfLaptop > -1))
    {
        var total = (numOfWatch * 50) + (numOfPhone * 100) + (numOfLaptop * 500)
        return Math.round(total);
    }
    else
    {
        return "Please enter a positive number!";
    }
}



/* hotelCost function */
function hotelCost (numOfDays)
{
    if (numOfDays < 0)
    {
        return "Please enter a positive number!";
    }
    else if (numOfDays <= 10)       // less than 10 days -> $100
    {
        var totalCost = numOfDays * 100;
        return Math.round(totalCost);
    }
    else if ((numOfDays > 10) && (numOfDays <= 20))     // 11 to 20 days -> $80
    {
        var cost1 = 10 * 100;
        var daysLeft = numOfDays - 10;
        var cost2 = daysLeft * 80;
        var totalCost = cost1 + cost2;
        return Math.round(totalCost);
    }
    else        // more than 20 days -> $50
    {
        var cost1 = 10 * 100;
        var cost2 = 10 * 80;
        var daysLeft = numOfDays - 20;
        var cost3 = daysLeft * 50;
        var totalCost = cost1 + cost2 + cost3;
        return Math.round(totalCost);
    }
}



/* megaFriend function */
function megaFriend (arrayOfNames)
{
    if (arrayOfNames.length > 0)
    {
        var megaName = arrayOfNames[0];     // first index of array assigned into megaName
        for (var i = 1; i < arrayOfNames.length; i++)
        {
            if (megaName.length < arrayOfNames[i].length)
            {
                megaName = arrayOfNames[i];
            }
        }
        return megaName;
    }
    else
    {
        return "Please enter an array of multiple string!";
    }
}