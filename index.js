let milk = ""
let f = 0
let g = ""
let pum = ""
let p = 0
let sagar = 0
let r = ""
let kybash = 0
let coffee = ""



while (f == 0) {
  const j = prompt(
    "Яку каву ви бажаєте? (Американо, Американо з молоком, Лате, Капучіно)")
  if (j == "Американо") {
    f++;
    coffee = "Американо";
  } else if (j == "Американо з молоком") {
    f++;
    coffee = "Американо з молоком";
  } else if (j == "Капучіно") {
    f++;
    coffee = "Капучіно";
  } else if (j == "Лате") {
    f++;
    coffee = "Лате";
  }
}
if (coffee == "Американо з молоком") {
  while (p == 0) {
    const Amerikanomilk = prompt("З вершками чи з молоком?");
    if (
      Amerikanomilk == "З вершками") {
      p++;
      milk = "З вершками";
    } else if (
      Amerikanomilk == "З молоком"
    ) {
      p++;
      milk = "З молоком";
    }
  }
}
if (coffee == "Капучіно" || coffee == "Лате") {
  while (p == 0) {
    const h = prompt("Маленький чи великий?");
    if (h == "Маленький") {
      p++;
      r = "Маленька";
    } else if (h == "Великий") {
      p++;
      r = "Великий";
    }
  }
}
while (kybash == 0) {
  const po = prompt("Кубаш чи Арабіка?");
  if (po == "Кубаш") {
    kybash++;
    g = "Кубаш";
  } else if (po == "Арабіка") {
    kybash++;
    g = "Арабіка";
  }
}
while (sagar == 0) {
  const m = prompt("Скільки цукру?");
  if (
    m == 0 ||m == 1 ||m == 2 || m == 3 ||m == 4 || m == 5
  ) {
    sagar++;
    pum = m;
  }
}

if (coffee == "Американо") {
  console.log(
    `Ось ваше замовлення: Кава ${coffee} - ${g}, ${pum} ложок цукру`)
} else if (coffee == "Американо з молоком") {
  console.log(
    `Ось ваше замовлення: Кава ${coffee} - ${milk}, ${g}, ${pum} ложок цукру`
  );
} else if (coffee == "Капучіно" || coffee == "Лате") {
  console.log(
    `Ось ваше замовлення: кава ${coffee} - ${r}, ${g}, ${pum} ложок цукру`
  );
}

