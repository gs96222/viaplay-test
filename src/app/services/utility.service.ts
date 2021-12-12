import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

/**
 * Calculate how man items can be in a row.
 *
 * @param {number} [containerWidth] - width of the outer container
 * @param {number} [itemWidth] - individual item's width
 *
 * @return {number} items per a row
 */
  getItemsPerRow(containerWidth:number, itemWidth:number) {
    return Math.floor(containerWidth / itemWidth);
  }

  
  /**
 * Handling next and pervious and up and down functionality.
 *
 * @param {string} [direction] - 'right' | 'left' | 'down' | 'up'
 * @param {number} [itemsLength] - All items count
 * @param {number} [itemsPerRow] - tems per row
 * @param {number} [currentItemIndex] - Current item index
 *
 * @return {number} next selected index
 */
  getNextSelectedIndex(direction: string, itemsLength: number, itemsPerRow: number, currentItemIndex: number) {
    let nextIndex = currentItemIndex;
  
    switch (direction) {
      case 'ArrowRight':
        if (currentItemIndex < itemsLength - 1) {
          nextIndex = currentItemIndex + 1;
        }
        break;
      case 'ArrowLeft':
        if (currentItemIndex > 0) {
          nextIndex = currentItemIndex - 1;
        }
        break;
      case 'ArrowDown':
        if (currentItemIndex <= itemsLength - itemsPerRow - 1) {
          nextIndex = currentItemIndex + itemsPerRow;
        }else{
          nextIndex = itemsLength-1;
        }
        break;
      case 'ArrowUp':
        if (currentItemIndex - itemsPerRow >= 0) {
          nextIndex = currentItemIndex - itemsPerRow;
        }
        break;
  
      default:
        nextIndex = currentItemIndex;
        break;
    }
    return nextIndex;
  }
}
