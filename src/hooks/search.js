import { computed, ref, watch } from 'vue';

export default function useSearch(itemsArray, key) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(() => {
    let filteredItems = [];

    if (activeSearchTerm.value) {
      filteredItems = itemsArray.value.filter(item => item[key].includes(activeSearchTerm.value));
    } else {
      filteredItems = itemsArray.value;
    }

    return filteredItems;
  })

  watch(enteredSearchTerm, (newVal) => {
    setTimeout(() => {
      if (newVal === enteredSearchTerm.value) {
        activeSearchTerm.value = newVal;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  console.log(availableItems);

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  }
}
