export function removeDuplicates<T extends { id: string }>(array: T[]): T[] {
  const uniqueObjects = array.reduce((acc: T[], current) => {
    const isDuplicate = acc.some((item) => item.id === current.id);
    if (!isDuplicate) acc.push(current);
    return acc;
  }, []);
  return uniqueObjects;
}
