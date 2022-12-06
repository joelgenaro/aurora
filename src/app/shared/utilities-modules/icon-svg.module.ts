import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
    declarations: [],
    exports: [],
})
export class IconSvgModule {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry
            .addSvgIcon(
                /** Usage <mat-icon svgIcon="bed" color="primary"></mat-icon> **/
                'logo',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/logo.svg')
            ).addSvgIcon(
                'notification',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/notification.svg')
            ).addSvgIcon(
                'menu',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/menu.svg')
            ).addSvgIcon(
                'close',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/close.svg')
            ).addSvgIcon(
                'small-down',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/small-down.svg')
            ).addSvgIcon(
                'user-profile',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/user-profile.svg')
            ).addSvgIcon(
                'language',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/language.svg')
            ).addSvgIcon(
                'logout',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/logout.svg')
            ).addSvgIcon(
                'search',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/search.svg')
            ).addSvgIcon(
                'search-gray',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg-icons/search-gray.svg')
            ).addSvgIcon(
                'customer-contact-form-paperclip',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/paperclip.svg')
            ).addSvgIcon(
                'customer-contact-form-mail',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/mail.svg')
            ).addSvgIcon(
                'customer-contact-form-call',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/call.svg')
            ).addSvgIcon(
                'customer-contact-form-audio',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/audio.svg')
            ).addSvgIcon(
                'customer-service-happy-icon',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/happy-svgrepo-c.svg')
            ).addSvgIcon(
                'customer-service-sad-nocolor-icon',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/sad-nocolor.svg')
            ).addSvgIcon(
                'customer-service-sad-nocolor-1-icon',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/sad-nocolor-1.svg')
            ).addSvgIcon(
                'customer-service-arrow-down-notes',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/arrow-down(notes).svg')
            )
            .addSvgIcon(
                'customer-service-select-down',
                sanitizer.bypassSecurityTrustResourceUrl('assets/images/customer-service-icons/select-down.svg')
            )
            
    }
}
