import { computed, ref } from 'vue';

export default function useSort(availableItems, key) {
  const sorting = ref(null);

  const displayedUsers = computed(() => {
    if (!sorting.value) {
      return availableItems.value;
    }
    
    return availableItems.value.slice().sort((user1, user2) => {
      if (sorting.value === 'asc' && user1[key] > user2[key]) {
        console.log(displayedUsers.value);
        console.log(123);
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && user1[key] > user2[key]) {
        return -1;
      } else {
        return 1;
      }
    });
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
