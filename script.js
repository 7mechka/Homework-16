const userAgree = confirm('Tell me three most important words 💚')
let userWords = []
let formatType = undefined
let finalResult = undefined
if (userAgree) {
    for (let i = 0, j = 1; i <= 2; i++) {
        j = i + 1
        formatType = undefined
        userWords[i] = prompt('Input your ' + j + ' word')
        if (!userWords[i] || userWords[i] === ' ') {
            console.error('Line empty')
            i--
            continue
        }
        else if (/\d/.test(userWords[i])) {
            console.error('Number detected')
            i--
            continue
        }
        do {
            formatType = prompt('Select formatting option(uppercase lowercase capitalize)')
            if (formatType === 'uppercase') {
                userWords[i] = userWords[i].toUpperCase();
            }
            else if (formatType === 'lowercase') {
                userWords[i] = userWords[i].toLowerCase()
            }
            else if (formatType === 'capitalize') {
                userWords[i] = userWords[i].toLowerCase()
                userWords[i] = userWords[i].replace(userWords[i][0], userWords[i][0].toUpperCase())
            }
        }
        while (formatType !== 'uppercase' && formatType !== 'lowercase' && formatType !== 'capitalize')
    }
}
else {
    alert('meh')
}
finalResult = `${userWords[0]} ${userWords[1]} ${userWords[2]}!`
console.log(finalResult)

