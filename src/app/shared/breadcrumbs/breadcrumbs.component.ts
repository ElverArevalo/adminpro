import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
    titulo: string;
  constructor(private router: Router,
    private  title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.getTitulos()
    .subscribe(data =>{
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.titulo

      } ;
      this.meta.updateTag(metaTag);
    });
  }
  getTitulos(){
  return  this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd)=> evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) =>  evento.snapshot.data),
    )
  }

}
