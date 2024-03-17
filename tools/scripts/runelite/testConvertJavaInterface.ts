/* eslint-disable @typescript-eslint/no-unsafe-call */
import { convertJavaInterfaceToTypeScriptInterface } from './convertJavaInterface';

const test = `public interface AABB
{
    int getCenterX();
    int getCenterY();
    int getCenterZ();

    int getExtremeX();
    int getExtremeY();
    int getExtremeZ();
}`;
const expectedOutput = `interface AABB {
    getCenterX(): number;
    getCenterY(): number;
    getCenterZ(): number;
    getExtremeX(): number;
    getExtremeY(): number;
    getExtremeZ(): number;
}`;

const output = convertJavaInterfaceToTypeScriptInterface(test);
console.log(output.replaceAll(' ', '') === expectedOutput.replaceAll(' ', ''));

const testTwo = `/**
* Represents an engine graphic buffer.
*/
public interface BufferProvider
{
   int[] getPixels();

   int getWidth();

   int getHeight();
}`;

const expectedOutputTwo = `/**
* Represents an engine graphic buffer.
*/
interface BufferProvider {
    getPixels(): number[];
    getWidth(): number;
    getHeight(): number;
}`;

const outputTwo = convertJavaInterfaceToTypeScriptInterface(testTwo);
console.log(
	outputTwo.replaceAll(' ', '') === expectedOutputTwo.replaceAll(' ', ''),
);
