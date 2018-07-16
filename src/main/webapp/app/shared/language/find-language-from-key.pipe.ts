import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
    private languages: any = {
        cs: { name: 'Český' },
        en: { name: 'English' },
        de: { name: 'Deutsch' },
        pl: { name: 'Polski' },
        ro: { name: 'Română' },
        ru: { name: 'Русский' },
        sk: { name: 'Slovenský' },
        sr: { name: 'Srpski' },
        ua: { name: 'Українська' }
        // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    };
    transform(lang: string): string {
        return this.languages[lang].name;
    }
}
