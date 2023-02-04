$(document).ready(function () {
  const aaa = () => {
    alert("ddd");
  };
  $("#commentForm").validate({
    submitHandler: () => {
      aaa();
    },
  });
});
