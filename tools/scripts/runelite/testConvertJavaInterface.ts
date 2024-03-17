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
// console.log(output.replaceAll(' ', '') === expectedOutput.replaceAll(' ', ''));

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
// console.log(
// 	outputTwo.replaceAll(' ', '') === expectedOutputTwo.replaceAll(' ', ''),
// );

const exampleInputThree = `/**
* An ambient sound effect. These are loaded only at scene load and are used to play ambient
* sound effects that are purely client side and not sent from the server.
*/
public interface AmbientSoundEffect
{
   /**
    * The background sound effect ids. One sound effect is picked from this at random.
    * @see SoundEffectID
    * @return
    */
   @Nullable
   int[] getBackgroundSoundEffectIds();

   @Override
   int getSoundEffectId();

   /**
    * The max x/y position of the area this sound effect is at
    * @return
    */
   LocalPoint getMaxPosition();
}`;

const expectedOutputThree = `/**
* An ambient sound effect. These are loaded only at scene load and are used to play ambient
* sound effects that are purely client side and not sent from the server.
*/
interface AmbientSoundEffect
{
   /**
    * The background sound effect ids. One sound effect is picked from this at random.
    * @see SoundEffectID
    * @return
    */

   getBackgroundSoundEffectIds(): number[] | null;


   getSoundEffectId(): number;

   /**
    * The max x/y position of the area this sound effect is at
    * @return
    */
   getMaxPosition(): LocalPoint;
}`;

const outputThree =
	convertJavaInterfaceToTypeScriptInterface(exampleInputThree);
console.log(
	outputThree.trim().replaceAll(' ', '') ===
		expectedOutputThree.trim().replaceAll(' ', ''),
);
