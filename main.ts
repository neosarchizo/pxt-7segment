/**
 * 7 segment utilities
 */
//% color="#15A2ED" weight=10
namespace sevenSegment {

    let a: DigitalPin;
    let b: DigitalPin;
    let c: DigitalPin;
    let d: DigitalPin;
    let e: DigitalPin;
    let f: DigitalPin;
    let g: DigitalPin;
    let dp: DigitalPin;

    /**
     * 7 세그먼트 초기화
     * @param a A 핀
     * @param b B 핀
     * @param c C 핀
     * @param d D 핀
     * @param e E 핀
     * @param f F 핀
     * @param g G 핀
     * @param dp DP 핀
     */
    //% blockId=seven_segment_initialzie block="초기화|A %a B %b C %c D %d|E %e F %f G %g DP %dp"
    export function initialize(_a: DigitalPin, _b: DigitalPin, _c: DigitalPin, _d: DigitalPin, _e: DigitalPin, _f: DigitalPin, _g: DigitalPin, _dp: DigitalPin) {
        led.enable(false);
        a = _a;
        b = _b;
        c = _c;
        d = _d;
        e = _e;
        f = _f;
        g = _g;
        dp = _dp;
    }

    /**
     * 7 세그먼트에 숫자를 표시합니다.
     * @param num 숫자
     */
    //% blockId=seven_segment_display block="숫자 표시하기|숫자 %num"
    //% num.min=0 num.max=9
    //% num.shadow=turnRatioPicker
    export function displayNumber(num: number) {
        // do something
        switch (num) {
            case 0: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 1);
                pins.digitalWritePin(f, 1);
                pins.digitalWritePin(g, 0);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 1: {
                pins.digitalWritePin(a, 0);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 0);
                pins.digitalWritePin(e, 0);
                pins.digitalWritePin(f, 0);
                pins.digitalWritePin(g, 0);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 2: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 0);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 1);
                pins.digitalWritePin(f, 0);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 2: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 0);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 1);
                pins.digitalWritePin(f, 0);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 3: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 0);
                pins.digitalWritePin(f, 0);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 4: {
                pins.digitalWritePin(a, 0);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 0);
                pins.digitalWritePin(e, 0);
                pins.digitalWritePin(f, 1);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 5: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 0);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 0);
                pins.digitalWritePin(f, 1);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 6: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 0);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 1);
                pins.digitalWritePin(f, 1);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 7: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 0);
                pins.digitalWritePin(e, 0);
                pins.digitalWritePin(f, 0);
                pins.digitalWritePin(g, 0);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 8: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 1);
                pins.digitalWritePin(f, 1);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            case 9: {
                pins.digitalWritePin(a, 1);
                pins.digitalWritePin(b, 1);
                pins.digitalWritePin(c, 1);
                pins.digitalWritePin(d, 1);
                pins.digitalWritePin(e, 0);
                pins.digitalWritePin(f, 1);
                pins.digitalWritePin(g, 1);
                pins.digitalWritePin(dp, 0);
                break;
            }
            default:
                pins.digitalWritePin(a, 0);
                pins.digitalWritePin(b, 0);
                pins.digitalWritePin(c, 0);
                pins.digitalWritePin(d, 0);
                pins.digitalWritePin(e, 0);
                pins.digitalWritePin(f, 0);
                pins.digitalWritePin(g, 0);
                pins.digitalWritePin(dp, 0);
                break;
        }
    }
}