// src/components/Navbar.js
import React, { useState } from "react"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="header" className="container-fluid">
        <div className="component container header-top container-no-padding">
          <div className="component-content">
            <div className="component icon-link icon-link--header-logo">
              <div className="component-content">
                <a title="Logo" href="" data-toggle-trigger aria-label="Jeweality">
                  <h1>Jewelality</h1>
                </a>
              </div>
            </div>
            <div className="component modal-outer modal-global-search col-12">
              <div className="component-content">
                <div className="modal fade" id="modalGlobalSearch" tabindex="-1" role="dialog" aria-labelledby="modalGlobalSearch" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div class="component search-box horizontal initialized" data-properties='{"endpoint":"/en/sxa/search/results/","suggestionEndpoint":"/en/sxa/search/suggestions/","suggestionsMode":"","resultPage":"/en/search-results","targetSignature":"globalsearchsignature","v":"{C3F49365-C411-467A-9F45-E6D144E5F5DC}","s":"{1E9BD01D-8F2E-4749-BA22-41F9F658467C}","p":0,"l":"","languageSource":"SearchResultsLanguage","searchResultsSignature":"globalsearchsignature","itemid":"{CB2F3853-87BF-4A7A-A4A6-73617CE6F72E}","minSuggestionsTriggerCharacterCount":2}'>
                          <div class="component-content">
                            <label for="textBoxSearch">Search Jeweality</label>
                            <span class="twitter-typeahead"  style={{position:"relative", display:"inline-block" }}>
                              <input type="text" class="search-box-input tt-input" autocomplete="off" id="textBoxSearch" name="textBoxSearch" placeholder="Search Harry Winston" spellcheck="false" dir="auto" />
                              <pre aria-hidden="true"></pre>
                            </span>
                            <button aria-label="Search" class="search-box-button-with-redirect" type="submit"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="component icon-link icon-link--header-crest">
                <div class="component-content">
                  <a title="Crest" href="/en" data-toggle-trigger="" aria-label="Harry Winston Logo" aria-hidden="true" tabindex="-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="43" fill-rule="evenodd" viewBox="0 0 28 43">
                      <path d="M20.63 0H7.198L6.17.426.427 6.14 0 7.164v28.183l.427 1.023 5.744 5.716 1.027.424H20.68l1.026-.424 5.742-5.716.428-1.023V7.164L27.45 6.14 21.708.426 20.682 0h-.052zm-.054.526l.838.343 5.592 5.568.344.832v27.97l-.344.833-5.592 5.568-.838.342H7.305l-.838-.342-5.592-5.568-.348-.833V7.27l.348-.832L6.467.87l.838-.343h13.27zm-2.3 9.382l.014-.005c.053 0 .095-.04.095-.092V9.7c0-.05-.042-.093-.095-.093h-.43V9.6h-1.275v.003h-.437c-.054 0-.095.04-.095.093v.1c0 .05.04.095.095.095l.013.005c.232 0 .42.186.42.416l.005-.018V14.2h-.005c0 .257-.17.46-.386.48h-4.5c-.206-.018-.372-.2-.386-.45V10.3a.42.42 0 0 1 .418-.391l.014-.005c.054 0 .096-.04.096-.092V9.7c0-.05-.042-.093-.096-.093h-.43V9.6h-1.274v.003H9.6c-.054 0-.095.04-.095.093v.1c0 .05.04.095.095.095l.013.005a.42.42 0 0 1 .419.416l.004-.018-.004 9.673a.42.42 0 0 1-.419.416L9.6 20.4c-.054 0-.095.04-.095.093v.1c0 .048.04.092.095.092h.436v.002h1.705c.054 0 .096-.042.096-.093v-.1c0-.053-.042-.096-.096-.096h-.014a.42.42 0 0 1-.418-.39v-4.236c.014-.218.15-.398.33-.44h4.62c.2.045.332.24.332.474l.005-.012v4.2l-.005-.02c0 .23-.187.416-.42.416l-.013.007c-.054 0-.095.04-.095.093v.1c0 .048.04.092.095.092h.437v.002h1.706c.053 0 .095-.042.095-.093v-.1c0-.053-.042-.096-.095-.096h-.014a.42.42 0 0 1-.417-.4V10.3c.01-.217.194-.4.417-.4M21.8 23.34h-1.97a.1.1 0 0 0-.096.096v.1c0 .053.046.093.096.093l.35.003h.054c.18 0 .2.057.1.327l-3.04 7.46s-.066.15-.194.15c-.115 0-.194-.123-.2-.147l-1.876-4.142 1.386-3.45s.1-.23.6-.23l.114-.002c.053 0 .095-.04.095-.096v-.1c0-.05-.042-.093-.095-.093H15.12c-.05 0-.094.044-.094.093v.1c0 .054.043.096.094.096l.35.002h.054c.182 0 .202.057.093.328l-.945 2.328c-.014.018-.036.038-.07.038s-.064-.03-.074-.048L13.43 23.83c-.13-.233-.05-.23.125-.23h.28l.2-.002c.05 0 .095-.04.095-.096v-.1c0-.05-.044-.093-.095-.093h-2.7c-.054 0-.1.044-.1.093v.1c0 .054.046.096.1.096l.114.002c.372 0 .47.242.47.242l1.975 4.307-1.362 3.348c-.035.04-.098.1-.173.1-.12 0-.175-.153-.175-.153s-.007.007-.015.02L8.4 24.116c-.087-.212-.27-.502-.096-.502h.28l.2-.002c.053 0 .098-.04.098-.096v-.1c0-.05-.045-.093-.098-.093H6.088c-.05 0-.094.044-.094.093v.1c0 .054.042.096.094.096l.116.002c.368 0 .467.242.467.242L11.93 34.3l.017.043s.034.06.088.06.1-.013.118-.06v.01l2.14-5.322 2.398 5.23.027.08s.03.058.087.058.1-.012.122-.062c.003-.005.01-.025.014-.052l4.138-10.4s.093-.23.594-.23l.114-.003c.05 0 .094-.04.094-.093v-.1c0-.05-.044-.096-.094-.096m-1.27-21.525l-.436-.002H7.36l-5.513 5.5v27.858l5.513 5.5h13.158l5.512-5.5V7.325L20.518 1.84zm4.34 32.43v.382l-4.82 4.797H7.86L3.04 34.65V7.765l4.82-4.798h12.178l4.82 4.798V34.27z"></path>
                    </svg>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
