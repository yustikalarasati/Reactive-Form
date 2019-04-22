import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  //untuk template driven
  formModel = {
    // nama: "",
    // faculty: "",
    // nim: "",
    // entry:"",
    // birthdate:"",
    // address:"",
    // notes: "",
    // phones: "",
    // email:"",
    // check:""
  };

  //untuk reactive form
  myReactiveForm: FormGroup;

  // form;

  ngOnInit() {
    console.log("initialize");
    this.myReactiveForm = new FormGroup({
      nama: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(20)]),
      faculty: new FormControl("", [Validators.required]),
      nim: new FormControl(null, [Validators.required, Validators.pattern("^(?=.*[0-9])[0-9]+$")]),
      entrydate: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      notes : new FormControl(""),
      phones : new FormControl(null, [Validators.required, Validators.pattern("^(?=.*[0-9])[0-9]+$")]),
      email : new FormControl("", [Validators.required, Validators.email]),
      check: new FormControl(null, [Validators.requiredTrue])
    });
    // this.myReactiveForm.valueChanges.subscribe(form => {
    //   this.form = form;
    // });
  }

  get nama() {
    return this.myReactiveForm.get("nama");
  }

  get faculty(){
    return this.myReactiveForm.get("faculty");
  }

  get nim() {
    return this.myReactiveForm.get("nim");
  }

  get entrydate(){
    return this.myReactiveForm.get("entrydate");
  }

  get birthdate(){
    return this.myReactiveForm.get("birthdate");
  }

  get address(){
    return this.myReactiveForm.get("address");
  }

  get notes(){
    return this.myReactiveForm.get("notes");
  }

  get phones(){
    return this.myReactiveForm.get("phones");
  }

  get email(){
    return this.myReactiveForm.get("email");
  }

  get check() {
    return this.myReactiveForm.get("check");
  }

  //untuk reactive form
  submit2() {
    console.log(this.myReactiveForm);
    alert("submitted!");
  }
}
