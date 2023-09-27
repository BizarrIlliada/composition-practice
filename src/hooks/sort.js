import { computed, ref } from 'vue';

export default function useSort(availableItems, key) {
  const sorting = ref(null);

  const displayedUsers = computed(() => {
    if (!sorting.value) {
      return availableItems.value;
    }

    switch (sorting.value) {
      case 'asc':
        return [...availableItems.value].sort((item1, item2) => item1[key].localeCompare(item2[key]));
      case 'desc':
        return [...availableItems.value].sort((item1, item2) => item2[key].localeCompare(item1[key]));
    
      default:
        return availableItems;
    }
  });
  
  function sort(mode) {
    sorting.value = mode;
    console.log(displayedUsers.value);
  }


  return {
    displayedUsers,
    sorting,
    sort,
  }
}
