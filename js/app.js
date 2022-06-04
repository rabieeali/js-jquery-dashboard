
const utilitesObj = [
  { text: "داشبورد", icon: "fa-home" },
  { text: "پیام ها", icon: "fa-comment-dots" },
  { text: "کاربران", icon: "fa-user-group" },
  { text: "گزارش ها", icon: "fa-chart-pie" },
  { text: "تنظیمات", icon: "fa-gear" },
];
$(document).ready(function () {
    let sideBar = "";
  utilitesObj.map((util) => {
    sideBar += `
    <li class="my-2">
    <span
    class="text-white
    sidebar-li-hover
    cursor-pointer
    d-flex 
    justify-content-evenly    
    align-items-center"
    >
    <p class="pt-2">${util.text}</p>
      <i class="fa ${util.icon}"></i>
    </span>
   </li>`;
    $(".utilites").html(sideBar);
  });

  $(".edit-form").submit(function (event) {
    event.preventDefault();
    var inputValue = $(".edit").val();
    $(".company-name").text(inputValue);
  });
});
