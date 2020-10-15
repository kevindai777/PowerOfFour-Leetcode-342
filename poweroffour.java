//Java Solution

class Solution {
    public boolean isPowerOfFour(int num) {
        return (Math.log10(num) / (2 * Math.log10(2))) % 1 == 0;
    }
}