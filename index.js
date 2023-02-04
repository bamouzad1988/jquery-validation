$(document).ready(function () {
  const aaa = () => {
    alert("ddd");
  };
  $("#commentForm").validate({
    validClass: "success",
    submitHandler: () => {
      aaa();
    },
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "لطفا نام خود را به درستی وارد کنید",
        minlength: "حداقل طول نام 3 حزف می باشد",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
});
