import angelStudios from '../../src/utils/angelStudios';


describe('angelStudios', () => {
   it('#findFirstNonRepeatingCharacter', () => {
       expect(angelStudios.findFirstNonRepeatingCharacter('leetcode')).toBe(0);
       expect(angelStudios.findFirstNonRepeatingCharacter('loveleetcode')).toBe(2);
       expect(angelStudios.findFirstNonRepeatingCharacter('aabb')).toBe(-1);
       expect(angelStudios.findFirstNonRepeatingCharacter('bbaa')).toBe(-1);
       expect(angelStudios.findFirstNonRepeatingCharacter('aabbd')).toBe(4);
   });

    it('#findAnagrams', () => {
        expect(angelStudios.findAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]))
            .toMatchSnapshot()
    });

    it('#makeHashKey', () => {
        expect(angelStudios.makeHashKey('sam')).toBe('ams')
    })
});