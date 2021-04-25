// Increment - Decrement function
function handleSitChange(sitType, isIncrease)
{
    let sitCount = Number(document.getElementById(sitType + '-count').value);
    if(isIncrease == false)
    {
        if(sitCount > 0)
        {
            sitCount--;
        }
    }
    else
    {
        sitCount++;
    }
    document.getElementById(sitType + '-count').value = sitCount;
    totalAmount();
}

// Total Amount
function totalAmount()
{
    let subTotal = Number((sitCount('first') * 150) + (sitCount('economy') * 100));
    Number(document.getElementById('sub-total').innerText = '$' + subTotal);
    let charge = Number(subTotal * 0.1);
    Number(document.getElementById('charge').innerText = '$' + charge);
    let total = Number(subTotal + charge);
    Number(document.getElementById('total').innerText = '$' + total);
    return total;
}

function sitCount(sitType)
{
    if (sitType == 'first')
    {
        let sitCount = Number(document.getElementById(sitType + '-count').value);
        return sitCount;
    }
    else
    {
        let sitCount = Number(document.getElementById(sitType + '-count').value);
        return sitCount;
    }
}

// Confirmation
function bookNow()
{
    if (totalAmount() > 0)
    {
        const bookNowSec = document.getElementById('booking-area');
        bookNowSec.style.display = 'none';
        const confirmation = document.getElementById('confirmation');
        confirmation.style.display = 'block';
        message();
    }
    else
    {
        const caution = document.getElementById("caution");
        caution.style.display = 'block';
    }
}

function message()
{
    let firstBooked = sitCount('first');
    Number(document.getElementById('first-sit-booked').innerText = firstBooked);
    let firstBookedAmount = firstBooked * 150;
    Number(document.getElementById('first-booked-amount').innerText = '$' + firstBookedAmount);
    let economyBooked = Number(document.getElementById('economy-sit-booked').innerText = sitCount('economy'));
    let economyBookedAmount = economyBooked * 100;
    Number(document.getElementById('economy-booked-amount').innerText = '$' + economyBookedAmount);
    let amount = Number(document.getElementById('amount').innerText = '$' + totalAmount());
}