<script>
    import List, { Item, Graphic, Separator, Text } from '@smui/list';
import { dynasty } from './utils/helper';

    const today = new Date();
    const resources = [
        {
            name: "FTN Fantasy",
            url: "https://www.ftnfantasy.com/nfl",
            icon: "insights",
            premium: true,
            separator: true,
        },
        {
            name: "League of Heroes Bylaws",
            url: "https://docs.google.com/document/d/1OZxLWJscQE5cN1g0rxB1bWQtJoBLTp0UfiMkRnSit0U/",
            icon: "article",
            premium: false,
            separator: true,
        },
        {
            name: "League of Heroes Ledger",
            url: "https://docs.google.com/spreadsheets/d/1WwZzN1_jnfM1en74GF-QaWMJtS7zCh9qO4YpVPALxkY/",
            icon: "assessment",
            premium: false,
            separator: true,
        },
        {
            name: "League of Heroes FORM SUBMISSION",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfMQ2hmhso52W2f_tiOeQUCtX9KsXpM2F5bCGAhTkYq6V7zqQ/viewform/",
            icon: "assessment",
            premium: false,
            separator: true,
        },
        {
            name: "DynastyProcess Trade Calculator",
            url: "https://apps.dynastyprocess.com/calculator/",
            icon: "calculate",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "Dynasty 101 Trade Calculator",
            url: "https://dynasty101.com/trade-calculator/",
            icon: "calculate",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "KeepTradeCut",
            url: "https://keeptradecut.com/",
            icon: "insights",
            premium: false,
            separator: true,
            dynastyOnly: true,
        },
        {
            name: "FantasyCalc Trade Calculator",
            url: "https://www.fantasycalc.com/trade-calculator",
            icon: "calculate",
            premium: false,
            separator: false,
            dynastyOnly: false,
        }
    ];
</script>

<style>
    .pageBody {
        position: relative;
        z-index: 1;
    }

    :global(.list) {
        width: 90%;
        max-width: 800px;
        border: 1px solid
        var(--mdc-theme-text-hint-on-background, var(--d7d7d7));
        margin: 15px auto;
        padding: 0 !important;
        box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
    }


    :global(.linkText) {
        font-size: 1.1em;
    }

    a {
        color: var(--g555);
        font-size: 1.1em;
        text-decoration: none;
    }

    h4 {
        text-align: center;
    }

    .disclaimer {
        color: #888;
        text-align: center;
    }
</style>

<div class="pageBody">
    <div class="banner">
        <h4>Helpful Dynasty Resources</h4>
    </div>

    <List class="list" dense>
        {#each resources as resource}
            {#if resource.dynastyOnly && dynasty}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {:else if resource.redraftOnly && !dynasty}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {:else if !resource.redraftOnly && !resource.dynastyOnly}
                <a target="_blank" href="{resource.url}">
                    <Item>
                        {#if resource.icon}
                            <Graphic class="material-icons">{resource.icon}</Graphic>
                        {/if}
                        <Text class="linkText">{resource.name}{resource.premium ? "*" : ""}</Text>
                    </Item>
                    {#if resource.separator}
                        <Separator />
                    {/if}
                </a>
            {/if}
        {/each}
    </List>
    <p class="disclaimer">*Some or all content is behind a paywall</p>
</div>
