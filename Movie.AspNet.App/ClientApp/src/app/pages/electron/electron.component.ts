import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-electron",
  templateUrl: "./electron.component.html",
  styleUrls: ["./electron.component.css"],
})
export class ElectronComponent implements OnInit {
  constructor(
    @Inject("BASE_URL") private readonly baseUrl: string,
    private readonly http: HttpClient,
    private readonly fb: FormBuilder,
  ) { }

  public form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl(''),
      message: new FormControl('')
    })
  }

  showNotification(title: string, message: string) {
    return this.http.post(this.baseUrl + "api/electron/notify", {title, message});
  }

  onSubmit() {
    this.showNotification(this.form.value.title, this.form.value.message)
      .subscribe((...e) => console.warn('emmited', e));
  }
}
