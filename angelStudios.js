

const angelStudios = (value) => {
    const chars = {}
    for (let idx = 0; idx < value.length; idx++) {
        const char = value[idx];

        if (chars[char]) {
            const charDetails = chars[char];
            charDetails.count++;
        } else {
            chars[char] = {
                char,
                position: idx,
                count: 1
            }
        }
    }

    let positionIndex = -1;
    for (const key of Object.keys(chars)) {
        const charDetails = chars[key];

        if (charDetails.count === 1) {
            positionIndex = charDetails.position;
            break;
        }
    }

    return positionIndex;
}

const findAnagrams = (strs) => {
    const groupedAnagrams = {}

    for (const str of strs) {
        const hashKey = makeHashKey(str);

        if (Array.isArray(groupedAnagrams[hashKey])) {
            groupedAnagrams[hashKey].push(str)
        } else {
            groupedAnagrams[hashKey] = [str];
        }
    }

    return Object.values(groupedAnagrams);
}

const makeHashKey = input => {
    return input.split('').sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }).join('')
}


export default {
    findFirstNonRepeatingCharacter: angelStudios,
    findAnagrams,
    makeHashKey
}