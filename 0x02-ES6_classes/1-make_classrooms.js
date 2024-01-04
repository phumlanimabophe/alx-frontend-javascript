import ClassRoom from './0-classroom';

/**
 * Creates and returns an array of ClassRoom instances, each with a defined maximum student size.
 * @returns {Array<ClassRoom>} - An array containing instantiated ClassRoom objects.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
